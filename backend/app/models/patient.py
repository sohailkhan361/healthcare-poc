from sqlalchemy import Column, Integer, String, Date
from app.core.database import Base
from sqlalchemy.orm import relationship

class Patient(Base):
    __tablename__ = 'patients'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    date_of_birth = Column(Date)

    appointments = relationship("Appointment", back_populates="patient")
    medical_records = relationship("MedicalRecord", back_populates="patient")
    insurances = relationship("Insurance", back_populates="patient")


