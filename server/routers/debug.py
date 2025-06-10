from fastapi import APIRouter
from models.debug_model import DebugRequest

router = APIRouter()

@router.post("/debug")
async def debug_code(request: DebugRequest):
    print(f"Received code: {request.code}")
    print(f"Received error: {request.error}")
    return {
        "message": "Received!",
        "code": request.code,
        "error": request.error,
    }
