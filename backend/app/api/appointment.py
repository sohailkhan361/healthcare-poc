from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.appointment import AppointmentSchema
from app.core.database import get_db
from app.crud.appointment import create_appointment

router = APIRouter()

# POST: http://localhost:8000/api/appointments
# {
#   "patient_id": 1,
#   "doctor_id": 2,
#   "appointment_time": "2025-04-11T14:30:00"
# }
@router.post("/appointments")
def add_appointment(appointment: AppointmentSchema, db: Session = Depends(get_db)):
    return create_appointment(db, appointment)
