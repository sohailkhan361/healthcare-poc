from sqlalchemy import Column, String, Float, Date, Integer
from app.core.database import Base

class Analytics(Base):
    __tablename__ = "analytics"

    id = Column(Integer, primary_key=True, index=True)
    metric_name = Column(String, index=True)
    metric_value = Column(Float)
    timestamp = Column(Date)

