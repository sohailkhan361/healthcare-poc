from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class InsuranceProviderSchema(BaseModel):
    id: int
    name: str
    description: Optional[str]
    types_offered: Optional[str]
    coverage_summary: Optional[str]
    overall_rating: Optional[float]
    minimum_premium: Optional[float]
    logo_url: Optional[str]
    website_url: Optional[str]
    partner: Optional[bool]

    class Config:
        from_attributes = True
