from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.analytics import AnalyticsSchema
from app.core.database import get_db
from app.crud.analytics import create_analytics_record

router = APIRouter()

# POST: http://localhost:8000/api/analytics
# {
#   "metric_name": "patient_visits",
#   "metric_value": 123.45,
#   "timestamp": "2025-04-11"
# }
@router.post("/analytics")
def add_analytics(analytics: AnalyticsSchema, db: Session = Depends(get_db)):
    return create_analytics_record(db, analytics)
