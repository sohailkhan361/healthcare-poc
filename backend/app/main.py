from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import engine, Base
from app.config import config

# Importing all routers
from app.api import (
    admin,
    patient,
    doctor,
    department,
    appointment,
    virtual_session,
    medical_record,
    feedback,
    analytics,
    insurance,
    insurance_providers,
)

# Creating the FastAPI app instance
app = FastAPI(
    title=config.APP_TITLE,
    description=config.APP_DESCRIPTION,
    version=config.APP_VERSION,
)

# Configuring middleware for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=config.ALLOWED_METHODS,
    allow_headers=config.ALLOWED_HEADERS,
)

# Initializing/Creating all tables
Base.metadata.create_all(bind=engine)

# Including routers
app.include_router(admin.router, prefix="/api")
app.include_router(patient.router, prefix="/api")
app.include_router(doctor.router, prefix="/api")
app.include_router(department.router, prefix="/api")
app.include_router(appointment.router, prefix="/api")
app.include_router(virtual_session.router, prefix="/api")
app.include_router(medical_record.router, prefix="/api")
app.include_router(feedback.router, prefix="/api")
app.include_router(analytics.router, prefix="/api")
app.include_router(insurance.router, prefix="/api")
app.include_router(insurance_providers.router, prefix="/api")