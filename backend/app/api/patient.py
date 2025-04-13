from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.crud import patient
from app.schemas.patient import PatientSchema
from app.core.database import SessionLocal
from app.core.database import get_db

router = APIRouter()

# GET: http://localhost:8000/api/patient/1
@router.get("/patient/{patient_id}", response_model=PatientSchema)
def get_patient(patient_id: int, db: Session = Depends(get_db)):
    patient_res = patient.get_patient_by_id(db=db, patient_id=patient_id)
    if patient_res is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient_res

# GET: http://localhost:8000/api/patients?limit=5
@router.get("/patients", response_model=list[PatientSchema])
def get_patients(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return patient.get_patients(db=db, skip=skip, limit=limit)

# POST: http://localhost:8000/api/patients
# {
#   "name": "John Doe",
#   "age": 45,
#   "address": "123 Main St, City, Country",
#   "phone": "1234567890",
#   "email": "john.doe@example.com"
# }
@router.post("/patients", response_model=PatientSchema)
def create_patient(patient_data: PatientSchema, db: Session = Depends(get_db)):
    return patient.create_patient_in_db(db=db, patient=patient_data)

# PUT: http://localhost:8000/api/patients/1
# {
#   "name": "John Doe Updated",
#   "age": 46,
#   "address": "456 New St, City, Country",
#   "phone": "9876543210",
#   "email": "john.doe.updated@example.com"
# }
@router.put("/patients/{patient_id}", response_model=PatientSchema)
def update_patient(patient_id: int, patient: PatientSchema, db: Session = Depends(get_db)):
    return patient.update_patient(db=db, patient_id=patient_id, patient=patient)

# **DELETE: http://localhost:8000/api/patients/5
@router.delete("/patients/{patient_id}", response_model=PatientSchema)
def delete_patient(patient_id: int, db: Session = Depends(get_db)):
    return patient.delete_patient(db=db, patient_id=patient_id)
