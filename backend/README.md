# Healthcare POC – Backend using Python (FastAPI + PostgreSQL)

This is the backend for the Healthcare Plus Proof of Concept (POC) project. It provides RESTful APIs for managing patients, appointments, doctors, and more. Built with **FastAPI**, it ensures speed, data validation, and scalability.

------------------------------------------------------------------------------------------------------------------------

# Tech Stack

- **Python 3.11+**
- **FastAPI** – Modern web framework for APIs
- **SQLAlchemy ORM** – Database abstraction
- **Pydantic** – Data validation and parsing
- **PostgreSQL** – Relational database
- **Uvicorn** – ASGI web server

---

# Project Structure
backend/
├── app/
│   ├── main.py
│   ├── database.py
│   ├── models/
│   ├── schemas/
│   └── crud/
├── requirements.txt
└── README.md

# SETUP:
1. Create and activate a virtual environment:
> python -m venv venv
> source venv/bin/activate        # macOS/Linux
> venv\Scripts\activate           # Windows

2. Install dependencies:
> pip install -r requirements.txt

3. Make sure postgresql is installed and running
> brew install postgresql@14

4. Create the database either using pgAdmin or the following command:
> psql -U postgres
> CREATE DATABASE healthcare_db;

5. Update the DB connection string in the .env file in root directory:
DATABASE_URL = "postgresql://postgres:<yourpassword>@localhost/healthcare_db"

6. Run the server, inside "backend" directory:
> uvicorn app.main:app --reload

# Swagger UI:
URL: http://localhost:8000/docs

# Backup/Restore
DB has been added to db_backup, this sql dump can be used to restore the data in the database and get the application up and running.
We can use pgAdmin Software to do this using an interactive user interface.
