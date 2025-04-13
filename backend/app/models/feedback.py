from sqlalchemy import Column, Integer, String
from app.core.database import Base

class Feedback(Base):
    __tablename__ = 'feedback'

    id = Column(Integer, primary_key=True, index=True)
    patient_name = Column(String, nullable=True, default="anonymous")
    doctor_name = Column(String, nullable=True)
    category = Column(String, default='other') 
    comments = Column(String)
    rating = Column(Integer)
