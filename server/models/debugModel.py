from pydantic import BaseModel

class DebugRequest(BaseModel):
    code: str
    error: str
