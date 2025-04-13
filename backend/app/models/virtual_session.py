from sqlalchemy import Column, Integer, DateTime, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class VirtualSession(Base):
    __tablename__ = 'virtual_sessions'
    
    id = Column(Integer, primary_key=True, index=True)
    appointment_id = Column(Integer, ForeignKey('appointments.id'))
    session_link = Column(String)
    session_time = Column(DateTime)
    
    appointment = relationship("Appointment", back_populates="virtual_sessions")
