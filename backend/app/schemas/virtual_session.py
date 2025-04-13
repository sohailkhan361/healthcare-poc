from pydantic import BaseModel
from datetime import datetime

class VirtualSessionSchema(BaseModel):
    appointment_id: int
    session_link: str
    session_time: datetime

    class Config:
        from_attributes = True
