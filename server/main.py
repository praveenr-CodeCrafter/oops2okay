from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from routers import debug
import os

app = FastAPI()

origin = os.getenv("FRONTEND_ORIGIN")
print(f"Frontend origin: {origin}")

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin] if origin else [], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["Content-Type", "Authorization"],
)

app.include_router(debug.router)