from sqlalchemy.orm import Session
from app.models.insurance import Insurance
from app.schemas.insurance import InsuranceSchema

def create_insurance(db: Session, insurance: InsuranceSchema):
    db_insurance = Insurance(**insurance.dict())
    db.add(db_insurance)
    db.commit()
    db.refresh(db_insurance)
    return db_insurance

def get_all_insurances(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Insurance).offset(skip).limit(limit).all()

def get_insurance_by_patient_id(db: Session, patient_id: int):
    return db.query(Insurance).filter(Insurance.patient_id == patient_id).all()

def delete_insurance(db: Session, insurance_id: int):
    insurance = db.query(Insurance).filter(Insurance.id == insurance_id).first()
    if insurance:
        db.delete(insurance)
        db.commit()
    return insurance
