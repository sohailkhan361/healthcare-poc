from sqlalchemy.orm import Session
from app.models.feedback import Feedback
from app.schemas.feedback import FeedbackSchema

def create_feedback(db: Session, feedback: FeedbackSchema):
    db_feedback = Feedback(
        patient_name=feedback.patient_name,
        doctor_name=feedback.doctor_name,
        category=feedback.category,
        comments=feedback.comments,
        rating=feedback.rating
    )
    db.add(db_feedback)
    db.commit()
    db.refresh(db_feedback)
    return db_feedback

def get_all_feedback(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Feedback).offset(skip).limit(limit).all()

def get_feedback_by_category(db: Session, category: str, skip: int = 0, limit: int = 100):
    return db.query(Feedback).filter(Feedback.category == category).offset(skip).limit(limit).all()
