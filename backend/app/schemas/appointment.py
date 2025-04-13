from pydantic import BaseModel
from datetime import datetime

class AppointmentSchema(BaseModel):
    patient_id: int
    doctor_id: int
    appointment_time: datetime
    
    class Config:
        from_attributes = True
