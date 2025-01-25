from app import app, db  # Import db and app from app.py
from models import User  # Import the User model from models.py

with app.app_context():
    db.create_all()  # Create the database and tables
