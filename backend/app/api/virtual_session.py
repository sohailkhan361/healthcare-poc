from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.virtual_session import VirtualSessionSchema
from app.core.database import get_db
from app.crud.virtual_session import create_virtual_session

router = APIRouter()

# POST: http://localhost:8000/api/virtual-sessions
# {
#   "appointment_id": 7,
#   "session_link": "https://zoom.us/j/1234567890",
#   "session_time": "2025-01-02T10:00:00"
# }
@router.post("/virtual-sessions")
def add_virtual_session(session: VirtualSessionSchema, db: Session = Depends(get_db)):
    return create_virtual_session(db, session)
