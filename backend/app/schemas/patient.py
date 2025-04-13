from pydantic import BaseModel
from datetime import date

class PatientSchema(BaseModel):
    name: str
    email: str
    phone: str
    date_of_birth: date
    
    class Config:
        from_attributes = True