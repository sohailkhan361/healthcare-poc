from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.medical_record import MedicalRecordSchema
from app.core.database import get_db
from app.crud.medical_record import get_all_medical_records, create_medical_record, update_medical_record_by_id, get_medical_record_by_patient_id, get_medical_record_by_doctor_id

router = APIRouter()

# GET: http://localhost:8000/api/medical-records
@router.get("/medical-records", response_model=list[MedicalRecordSchema])
def get_medical_records(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    records = get_all_medical_records(db, skip=skip, limit=limit)
    return records

# GET: http://localhost:8000/api/medical-records/patient/1
@router.get("/medical-records/patient/{patient_id}", response_model=list[MedicalRecordSchema])
def get_medical_records_by_patient(patient_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    records = get_medical_record_by_patient_id(db, patient_id, skip, limit)
    if not records:
        raise HTTPException(status_code=404, detail="No records found for this patient")
    return records

# GET: http://localhost:8000/api/medical-records/doctor/1
@router.get("/medical-records/doctor/{doctor_id}", response_model=list[MedicalRecordSchema])
def get_medical_records_by_doctor(doctor_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    records = get_medical_record_by_doctor_id(db, doctor_id, skip, limit)
    if not records:
        raise HTTPException(status_code=404, detail="No records found for this doctor")
    return records

# POST: http://localhost:8000/api/medical-records
# {
#   "patient_id": 5,
#   "doctor_id": 5,
#   "record_details": "Patient admitted with a respiratory infection, antibiotics prescribed.",
#   "record_date": "2025-04-06"
# }
@router.post("/medical-records")
def add_medical_record(record: MedicalRecordSchema, db: Session = Depends(get_db)):
    return create_medical_record(db, record)

# PUT: http://localhost:8000/api/medical-records/4
# {
#   "patient_id": 5,
#   "doctor_id": 5,
#   "record_details": "Patient admitted with a respiratory infection, antibiotics prescribed. Chest X-Ray Scan",
#   "record_date": "2025-04-06"
# }
@router.put("/medical-records/{record_id}", response_model=MedicalRecordSchema)
def update_medical_record(record_id: int, updated_record: MedicalRecordSchema, db: Session = Depends(get_db)):
    db_record = update_medical_record_by_id(db=db, record_id=record_id, updated_record=updated_record)
    if db_record is None:
        raise HTTPException(status_code=404, detail="Medical Record not found")
    return db_record
