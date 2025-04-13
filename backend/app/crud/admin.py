from sqlalchemy.orm import Session
from app.models.admin import Admin
from app.schemas.admin import AdminSchema, AdminOut
from passlib.context import CryptContext
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException, status

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def create_admin_in_db(db: Session, admin: AdminSchema):
    existing_admin = db.query(Admin).filter(Admin.username == admin.username).first()
    if existing_admin:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Admin username already exists."
        )
    
    hashed_password = hash_password(admin.password)
    
    db_admin = Admin(
        username=admin.username,
        phone=admin.phone,
        password=hashed_password
    )
    
    try:
        db.add(db_admin)
        db.commit()
        db.refresh(db_admin)
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create admin due to a database error."
        )
    
    return AdminOut(
        id=db_admin.id,
        username=db_admin.username,
        phone=db_admin.phone
    )

def update_admin(db: Session, admin_id: int, admin: AdminSchema):
    db_admin = db.query(Admin).filter(Admin.id == admin_id).first()

    if not db_admin:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Admin not found."
        )

    if admin.phone != db_admin.phone:
        existing_admin = db.query(Admin).filter(Admin.phone == admin.phone).first()
        if existing_admin:
            raise HTTPException(
                status_code=400,
                detail="Phone number already in use."
            )

    if admin.username != db_admin.username:
        existing_admin = db.query(Admin).filter(Admin.username == admin.username).first()
        if existing_admin:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Admin username already exists."
            )

    db_admin.username = admin.username
    db_admin.phone = admin.phone

    if admin.password:
        db_admin.password = hash_password(admin.password)
    
    try:
        db.commit()
        db.refresh(db_admin)
    except IntegrityError:
        db.rollback()
        raise ValueError("Failed to update admin due to a database error.")
    
    return AdminOut(
        id=db_admin.id,
        username=db_admin.username,
        phone=db_admin.phone
    )


def get_admin_by_id(db: Session, admin_id: int) -> AdminOut | None:
    db_admin = db.query(Admin).filter(Admin.id == admin_id).first()
    if db_admin:
        return AdminOut.from_orm(db_admin)
    return None

def get_admins(db: Session, skip: int = 0, limit: int = 100) -> list[AdminOut]:
    admins = db.query(Admin).offset(skip).limit(limit).all()
    return [AdminOut.from_orm(admin) for admin in admins]

def delete_admin(db: Session, admin_id: int) -> AdminOut | None:
    db_admin = db.query(Admin).filter(Admin.id == admin_id).first()
    if not db_admin:
        return None
    db.delete(db_admin)
    db.commit()
    return AdminOut.from_orm(db_admin)

def authenticate_admin(db: Session, username: str, password: str):
    admin = db.query(Admin).filter(Admin.username == username).first()
    if not admin:
        raise HTTPException(status_code=400, detail="Invalid username or password")

    if not pwd_context.verify(password, admin.password):
        raise HTTPException(status_code=400, detail="Invalid username or password")
    
    return AdminOut.from_orm(admin)
