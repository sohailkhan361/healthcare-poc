from pydantic import BaseModel
from datetime import date

class AnalyticsSchema(BaseModel):
    metric_name: str
    metric_value: float
    timestamp: date

    class Config:
        from_attributes = True
