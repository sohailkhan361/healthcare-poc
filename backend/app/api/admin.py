from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.crud import admin as admin_crud
from app.schemas.admin import AdminSchema, AdminOut, AdminCreate, AdminLoginSchema
from app.core.database import get_db

router = APIRouter()

# GET: http://localhost:8000/api/admins/1
@router.get("/admins/{admin_id}", response_model=AdminOut)
def get_admin(admin_id: int, db: Session = Depends(get_db)):
    admin_res = admin_crud.get_admin_by_id(db=db, admin_id=admin_id)
    if admin_res is None:
        raise HTTPException(status_code=404, detail="Admin not found")
    return admin_res

# GET: http://localhost:8000/api/admins?limit=10
@router.get("/admins", response_model=list[AdminOut])
def get_admins(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return admin_crud.get_admins(db=db, skip=skip, limit=limit)

# POST: http://localhost:8000/api/admins
# {
#   "id": 1,
#   "username": "SuperAdmin",
#   "password": "MySecretPassword@123",
#   "phone": "+91-8700458983"
# }
@router.post("/admins", response_model=AdminOut)
def create_admin(admin_data: AdminCreate, db: Session = Depends(get_db)):
    return admin_crud.create_admin_in_db(db=db, admin=admin_data)

# PUT: http://localhost:8000/api/admins/1
# {
#   "id": 1,
#   "username": "SuperAdmin",
#   "password": "MySafePassword@123",
#   "phone": "+91-8700458983"
# }
@router.put("/admins/{admin_id}", response_model=AdminOut)
def update_admin(admin_id: int, admin: AdminSchema, db: Session = Depends(get_db)):
    return admin_crud.update_admin(db=db, admin_id=admin_id, admin=admin)

# DELETE: http://localhost:8000/api/admins/2
@router.delete("/admins/{admin_id}", response_model=AdminOut)
def delete_admin(admin_id: int, db: Session = Depends(get_db)):
    deleted_admin = admin_crud.delete_admin(db=db, admin_id=admin_id)

    if deleted_admin is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Admin not found")
    
    return deleted_admin

@router.post("/admin/login")
def login_admin(credentials: AdminLoginSchema, db: Session = Depends(get_db)):
    admin = admin_crud.authenticate_admin(db, credentials.username, credentials.password)
    
    return {
        "message": "Login successful",
        "admin": admin.username
    }