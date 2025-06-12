from openai import OpenAI
import json, os
from dotenv import load_dotenv
from fastapi import HTTPException


load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_openai_response(prompt: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo", 
            messages=[
                {"role": "system", "content": "You are a helpful assistant that outputs valid JSON for debugging code."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.4,
            max_tokens=1000
        )
        # message = response['choices'][0]['message']['content']
        message = response.choices[0].message.content
        return json.loads(message)
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid JSON returned by OpenAI.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
