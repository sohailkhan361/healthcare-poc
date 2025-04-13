from psycopg2 import IntegrityError
from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.doctor import Doctor
from app.schemas.doctor import DoctorSchema

def create_doctor_in_db(db: Session, doctor: DoctorSchema):
    existing_doctor = db.query(Doctor).filter(
        (Doctor.email == doctor.email) | (Doctor.phone == doctor.phone)
    ).first()

    if existing_doctor:
        raise HTTPException(
            status_code=400,
            detail="A doctor with this email or phone number already exists."
        )

    db_doctor = Doctor(
        name=doctor.name,
        email=doctor.email,
        phone=doctor.phone,
        experience=doctor.experience,
        department_id=doctor.department_id
    )

    try:
        db.add(db_doctor)
        db.commit()
        db.refresh(db_doctor)
        return db_doctor
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="Database error occurred while creating the doctor."
        )

def get_doctor_by_id(db: Session, doctor_id: int):
    return db.query(Doctor).filter(Doctor.id == doctor_id).first()

def get_doctors(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Doctor).offset(skip).limit(limit).all()

def update_doctor(db: Session, doctor_id: int, doctor: DoctorSchema):
    db_doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()
    if db_doctor:
        for key, value in doctor.dict().items():
            setattr(db_doctor, key, value)
        db.commit()
        db.refresh(db_doctor)
    return db_doctor

def delete_doctor(db: Session, doctor_id: int):
    db_doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()
    if db_doctor:
        db.delete(db_doctor)
        db.commit()
    return db_doctor
