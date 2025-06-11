from fastapi import APIRouter
from models.debug_model import DebugRequest
from utils.ai_prompt import generate_debug_prompt

router = APIRouter()

@router.post("/debug")
async def debug_code(request: DebugRequest):
    code = request.code
    error = request.error
    prompt = generate_debug_prompt(code, error)
    print(f"Received code: {request.code}")
    print(f"Received error: {request.error}")
    return {
        "message": "Prompt generated",
        "prompt": prompt
    }
