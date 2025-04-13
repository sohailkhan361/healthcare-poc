from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.feedback import FeedbackSchema, FeedbackResponse
from app.core.database import get_db
from app.crud.feedback import (
    create_feedback, get_all_feedback,
    get_feedback_by_category
)

router = APIRouter()

# GET: http://localhost:8000/api/feedbacks
@router.get("/feedbacks", response_model=list[FeedbackSchema])
def get_feedbacks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_all_feedback(db=db, skip=skip, limit=limit)

# GET: http://localhost:8000/api/feedbacks/category/other
@router.get("/feedbacks/category/{category}", response_model=list[FeedbackSchema])
def get_feedback_by_cat(category: str, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_feedback_by_category(db=db, category=category, skip=skip, limit=limit)

# POST: http://localhost:8000/api/feedback
# {
#   "patient_name": "abc",
#   "doctor_name": "Dr. Alex",
#   "category": "consultation",
#   "comments": "Good!",
#   "rating": 3
# }
@router.post("/feedback", response_model=FeedbackResponse)
def add_feedback(feedback: FeedbackSchema, db: Session = Depends(get_db)):
    new_feedback = create_feedback(db, feedback)
    return {
        "message": f"Thank you for your feedback! Name recorded as: {new_feedback.patient_name}!",
        "feedback_id": new_feedback.id
    }