from pydantic import BaseModel
from datetime import date

class MedicalRecordSchema(BaseModel):
    patient_id: int
    doctor_id: int
    record_details: str
    record_date: date

    class Config:
        from_attributes = True