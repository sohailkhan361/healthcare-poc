from sqlalchemy.orm import Session
from app.models.analytics import Analytics
from app.schemas.analytics import AnalyticsSchema

def create_analytics_record(db: Session, analytics: AnalyticsSchema):
    db_analytics = Analytics(
        metric_name=analytics.metric_name,
        metric_value=analytics.metric_value,
        timestamp=analytics.timestamp
    )
    db.add(db_analytics)
    db.commit()
    db.refresh(db_analytics)
    return db_analytics
