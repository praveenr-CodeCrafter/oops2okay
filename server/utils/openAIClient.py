import google.generativeai as genai
import json, os, re
from dotenv import load_dotenv
from fastapi import HTTPException


load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_AI_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

def cleanJsonResponse(text: str) -> str:
    return re.sub(r"^```(?:json)?\n([\s\S]*?)\n```$", r"\1", text.strip())

def getGoogleaiResponse(prompt: str) -> dict:
    try:
        response = model.generate_content(prompt)

        if not response or not response.text:
            raise HTTPException(status_code=500, detail="No response from Gemini.")
        
        cleaned = cleanJsonResponse(response.text)
        data = json.loads(cleaned)
        return data

    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid JSON returned by Gemini.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))