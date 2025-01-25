from app import app
from models import db

with app.app_context():
    db.create_all()  # Create the database and tables
    print("Database and tables created!")
