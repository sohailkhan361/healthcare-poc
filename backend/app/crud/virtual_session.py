from sqlalchemy.orm import Session
from app.models.virtual_session import VirtualSession
from app.schemas.virtual_session import VirtualSessionSchema

def create_virtual_session(db: Session, session: VirtualSessionSchema):
    db_session = VirtualSession(
        appointment_id=session.appointment_id,
        session_link=session.session_link,
        session_time=session.session_time
    )
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    return db_session
