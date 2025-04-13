from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.crud import department
from app.core.database import get_db
from app.schemas.department import DepartmentSchema

router = APIRouter()

# GET: http://localhost:8000/api/departments?limit=100
@router.get("/departments", response_model=list[DepartmentSchema])
def get_departments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    departments = department.get_departments(db=db, skip=skip, limit=limit)
    return departments