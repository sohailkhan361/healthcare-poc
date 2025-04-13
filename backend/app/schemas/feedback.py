from pydantic import BaseModel
from typing import Optional

class FeedbackSchema(BaseModel):
    patient_name: str = "anonymous"
    doctor_name: str = None
    category: Optional[str] = "other"
    comments: str
    rating: int

    class Config:
        from_attributes = True

class FeedbackResponse(BaseModel):
    message: str
    feedback_id: int