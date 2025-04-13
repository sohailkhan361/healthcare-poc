from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.patient import Patient
from app.schemas.patient import PatientSchema

def create_patient_in_db(db: Session, patient: PatientSchema):
    existing_patient = db.query(Patient).filter(
        (Patient.email == patient.email) | (Patient.phone == patient.phone)
    ).first()

    if existing_patient:
        raise HTTPException(
            status_code=400,
            detail="A patient with this email or phone number already exists."
        )

    db_patient = Patient(
        name=patient.name,
        email=patient.email,
        phone=patient.phone,
        date_of_birth=patient.date_of_birth
    )

    try:
        db.add(db_patient)
        db.commit()
        db.refresh(db_patient)
        return db_patient
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="Database error occurred while creating the patient."
        )

def get_patient_by_id(db: Session, patient_id: int):
    return db.query(Patient).filter(Patient.id == patient_id).first()

def get_patients(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Patient).offset(skip).limit(limit).all()

def update_patient(db: Session, patient_id: int, patient: PatientSchema):
    db_patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if db_patient:
        for key, value in patient.dict().items():
            setattr(db_patient, key, value)
        db.commit()
        db.refresh(db_patient)
    return db_patient

def delete_patient(db: Session, patient_id: int):
    db_patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if db_patient:
        db.delete(db_patient)
        db.commit()
    return db_patient
