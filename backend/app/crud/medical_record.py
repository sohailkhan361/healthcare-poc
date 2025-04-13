from sqlalchemy.orm import Session
from app.models.medical_record import MedicalRecord
from app.schemas.medical_record import MedicalRecordSchema

def create_medical_record(db: Session, record: MedicalRecordSchema):
    db_record = MedicalRecord(
        patient_id=record.patient_id,
        doctor_id=record.doctor_id,
        record_details=record.record_details,
        record_date=record.record_date
    )
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record

def update_medical_record_by_id(db: Session, record_id: int, updated_record: MedicalRecordSchema):
    db_record = db.query(MedicalRecord).filter(MedicalRecord.id == record_id).first()
    
    if db_record:
        db_record.patient_id = updated_record.patient_id
        db_record.doctor_id = updated_record.doctor_id
        db_record.record_details = updated_record.record_details
        db_record.record_date = updated_record.record_date
        
        db.commit()
        db.refresh(db_record)
        return db_record
    return None

def get_all_medical_records(db: Session, skip: int = 0, limit: int = 100):
    return db.query(MedicalRecord).offset(skip).limit(limit).all()

def get_medical_record_by_patient_id(db: Session, patient_id: int, skip: int = 0, limit: int = 100):
    return db.query(MedicalRecord).filter(MedicalRecord.patient_id == patient_id).offset(skip).limit(limit).all()

def get_medical_record_by_doctor_id(db: Session, doctor_id: int, skip: int = 0, limit: int = 100):
    return db.query(MedicalRecord).filter(MedicalRecord.doctor_id == doctor_id).offset(skip).limit(limit).all()