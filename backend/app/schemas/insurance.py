from pydantic import BaseModel
from datetime import date

class InsuranceSchema(BaseModel):
    patient_id: int
    provider_id: int
    policy_number: str
    coverage_details: str
    valid_till: date

    class Config:
        from_attributes = True
