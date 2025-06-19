from fastapi import APIRouter
from models.debugModel import DebugRequest
from utils.aiPrompt import generateDebugPrompt
from utils.openAIClient import getGoogleaiResponse

router = APIRouter()

@router.post("/debug")
async def debug_code(request: DebugRequest):
    code = request.code
    error = request.error
    prompt = generateDebugPrompt(code, error)
    response = getGoogleaiResponse(prompt)
    if not response:
        return {"message": "No response from AI"}

    return {
        "message": "Prompt generated",
        "prompt": response
    }

# def greet(name)
#     print("Hello, " + name)
# SyntaxError: expected ':'