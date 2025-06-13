from fastapi import APIRouter
from models.debug_model import DebugRequest
from utils.ai_prompt import generate_debug_prompt
from utils.openAIClient import get_googleai_response

router = APIRouter()

@router.post("/debug")
async def debug_code(request: DebugRequest):
    code = request.code
    error = request.error
    prompt = generate_debug_prompt(code, error)
    response = get_googleai_response(prompt)
    if not response:
        return {"message": "No response from AI"}
    print(f"Received code: {response}")

    return {
        "message": "Prompt generated",
        "prompt": response
    }

# def greet(name)
#     print("Hello, " + name)
# SyntaxError: expected ':'