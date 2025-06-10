from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from routers import debug

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# class DebugRequest(BaseModel):
#     code: str
#     error: str

# @app.post("/debug")
# async def debug_code(request: DebugRequest):
#     print(f"Received code: {request.code}")
#     print(f"Received error: {request.error}")
#     return {"message": "Received!", "code": request.code, "error": request.error}

app.include_router(debug.router)