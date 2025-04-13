from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.insurance_providers import InsuranceProviderSchema
from app.core.database import get_db
from app.crud.insurance_providers import (
    create_insurance_provider,
    get_all_providers,
    get_provider_by_id,
    delete_provider
)

router = APIRouter()

# GET: http://localhost:8000/api/insurance-providers
@router.get("/insurance-providers", response_model=list[InsuranceProviderSchema])
def get_providers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_all_providers(db=db, skip=skip, limit=limit)


# GET: http://localhost:8000/api/insurance-providers/1
@router.get("/insurance-providers/{provider_id}", response_model=InsuranceProviderSchema)
def get_provider(provider_id: int, db: Session = Depends(get_db)):
    return get_provider_by_id(db, provider_id)

# POST: http://localhost:8000/api/insurance-provider
# {
#   "name": "ICICI Lombard",
#   "description": "Offers a wide range of health insurance plans with OPD & maternity cover",
#   "types_offered": "Health,Accidental,OPD,Maternity",
#   "coverage_summary": "Covers hospitalization, surgery, critical illness, and daycare procedures.",
#   "overall_rating": 4.5,
#   "minimum_premium": 499.0,
#   "logo_url": "https://example.com/icici-logo.png",
#   "website_url": "https://www.icicilombard.com"
# }
@router.post("/insurance-provider", response_model=InsuranceProviderSchema)
def add_provider(provider: InsuranceProviderSchema, db: Session = Depends(get_db)):
    return create_insurance_provider(db=db, provider=provider)

# DELETE: http://localhost:8000/api/insurance-provider/1
@router.delete("/insurance-provider/{provider_id}", response_model=InsuranceProviderSchema)
def remove_provider(provider_id: int, db: Session = Depends(get_db)):
    return delete_provider(db=db, provider_id=provider_id)
