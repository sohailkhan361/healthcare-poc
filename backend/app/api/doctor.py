from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.crud import doctor
from app.schemas.doctor import DoctorSchema, DoctorUpdateSchema
from app.core.database import SessionLocal
from app.core.database import get_db
from app.models.doctor import Doctor

router = APIRouter()

# GET: http://localhost:8000/api/doctor/1
@router.get("/doctor/{doctor_id}", response_model=DoctorSchema)
def get_doctor(doctor_id: int, db: Session = Depends(get_db)):
    doctor_res = doctor.get_doctor_by_id(db=db, doctor_id=doctor_id)
    if doctor_res is None:
        raise HTTPException(status_code=404, detail="doctor not found")
    return doctor_res

# GET: http://localhost:8000/api/doctors?limit=100
@router.get("/doctors", response_model=list[DoctorSchema])
def get_doctors(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return doctor.get_doctors(db=db, skip=skip, limit=limit)

# POST: http://localhost:8000/api/doctors
# { "id": 1
#   "name": "Dr. Aisha Verma",
#   "department_id": 1,
#   "experience": 12,
#   "phone": "9876543210",
#   "email": "aisha.verma@hospital.com"
# }
@router.post("/doctors", response_model=DoctorSchema)
def create_doctor(doctor_data: DoctorSchema, db: Session = Depends(get_db)):
    return doctor.create_doctor_in_db(db=db, doctor=doctor_data)

# PUT: http://localhost:8000/api/doctors/1
# { "id": 1
#   "name": "Dr. Aisha Verma",
#   "department_id": 1,
#   "experience": 12,
#   "phone": "9876543210",
#   "email": "aisha.verma@hospital.com"
# }
@router.put("/doctors/{doctor_id}", response_model=DoctorSchema)
def update_doctor(doctor_id: int, doctor: DoctorUpdateSchema, db: Session = Depends(get_db)):
    db_doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()
    if db_doctor is None:
        raise HTTPException(status_code=404, detail="Doctor not found")

    for key, value in doctor.dict(exclude_unset=True).items():
        setattr(db_doctor, key, value)

    db.commit()
    db.refresh(db_doctor)
    return db_doctor

# DELETE: http://localhost:8000/api/doctors/1
@router.delete("/doctors/{doctor_id}", response_model=DoctorSchema)
def delete_doctor(doctor_id: int, db: Session = Depends(get_db)):
    return doctor.delete_doctor(db=db, doctor_id=doctor_id)
