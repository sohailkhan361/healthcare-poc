from sqlalchemy.orm import Session
from app.models.department import Department

def get_departments(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Department).offset(skip).limit(limit).all()