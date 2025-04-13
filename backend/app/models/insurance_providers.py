from sqlalchemy import Column, Integer, String, Float, Text, Boolean
from sqlalchemy.orm import relationship
from app.core.database import Base

class InsuranceProvider(Base):
    __tablename__ = "insurance_providers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    description = Column(Text)
    types_offered = Column(String)
    coverage_summary = Column(Text)
    overall_rating = Column(Float)
    minimum_premium = Column(Float)
    logo_url = Column(String)
    website_url = Column(String)
    partner = Column(Boolean, default=False)

    insurances = relationship("Insurance", back_populates="provider")
