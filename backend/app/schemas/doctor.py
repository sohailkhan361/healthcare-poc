from pydantic import BaseModel
from typing import Optional

class DoctorSchema(BaseModel):
    id: int
    name: str
    department_id: int
    experience: int
    phone: str
    email: str
    image_url: Optional[str] = None
    
    class Config:
        from_attributes = True

class DoctorUpdateSchema(BaseModel):
    name: Optional[str] = None
    department_id: Optional[int] = None
    experience: Optional[int] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    image_url: Optional[str] = None
