from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.insurance import InsuranceSchema
from app.core.database import get_db
from app.crud.insurance import (
    create_insurance,
    get_all_insurances,
    get_insurance_by_patient_id,
    delete_insurance,
)

router = APIRouter()

# GET: http://localhost:8000/api/insurances
@router.get("/insurances", response_model=list[InsuranceSchema])
def get_insurances(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_all_insurances(db=db, skip=skip, limit=limit)

# GET: http://localhost:8000/api/insurances/patient/1
@router.get("/insurances/patient/{patient_id}", response_model=list[InsuranceSchema])
def get_insurances_by_patient(patient_id: int, db: Session = Depends(get_db)):
    return get_insurance_by_patient_id(db=db, patient_id=patient_id)

# POST: http://localhost:8000/api/insurance
# {
#   "patient_id": 2,
#   "provider_id": 4,
#   "policy_number": "POL123456700",
#   "coverage_details": "Full coverage for OPD and hospitalization",
#   "valid_till": "2026-03-31"
# }
@router.post("/insurance", response_model=InsuranceSchema)
def add_insurance(insurance: InsuranceSchema, db: Session = Depends(get_db)):
    return create_insurance(db=db, insurance=insurance)

# DELETE: http://localhost:8000/api/insurance/1
@router.delete("/insurance/{insurance_id}", response_model=InsuranceSchema)
def delete_insurance_by_id(insurance_id: int, db: Session = Depends(get_db)):
    return delete_insurance(db=db, insurance_id=insurance_id)
