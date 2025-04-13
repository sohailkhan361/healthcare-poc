from sqlalchemy.orm import Session
from app.models.insurance_providers import InsuranceProvider
from app.schemas.insurance_providers import InsuranceProviderSchema

def create_insurance_provider(db: Session, provider: InsuranceProviderSchema):
    db_provider = InsuranceProvider(**provider.dict())
    db.add(db_provider)
    db.commit()
    db.refresh(db_provider)
    return db_provider

def get_all_providers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(InsuranceProvider).offset(skip).limit(limit).all()

def get_provider_by_id(db: Session, provider_id: int):
    return db.query(InsuranceProvider).filter(InsuranceProvider.id == provider_id).first()

def delete_provider(db: Session, provider_id: int):
    provider = get_provider_by_id(db, provider_id)
    if provider:
        db.delete(provider)
        db.commit()
    return provider
