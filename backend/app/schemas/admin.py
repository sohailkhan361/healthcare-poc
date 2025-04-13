from pydantic import BaseModel

class AdminBase(BaseModel):
    username: str
    phone: str
    password: str

class AdminCreate(BaseModel):
    username: str
    password: str
    phone: str

class AdminUpdate(AdminBase):
    pass

class AdminSchema(AdminBase):

    class Config:
        from_attributes = True

class AdminOut(BaseModel):
    id: int
    username: str
    phone: str
    password: str

    class Config:
        from_attributes = True

class AdminLoginSchema(BaseModel):
    username: str
    password: str