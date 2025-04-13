from sqlalchemy import Column, Integer, String, ForeignKey, Date, Boolean
from sqlalchemy.orm import relationship
from app.core.database import Base

class Insurance(Base):
    __tablename__ = "insurances"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"), nullable=False)
    provider_id = Column(Integer, ForeignKey("insurance_providers.id"), nullable=False)
    policy_number = Column(String, unique=True, nullable=False)
    coverage_details = Column(String)
    valid_till = Column(Date)

    patient = relationship("Patient", back_populates="insurances")
    provider = relationship("InsuranceProvider", back_populates="insurances")
