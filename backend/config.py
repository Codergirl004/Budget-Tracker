class Config:
    SECRET_KEY = 'Success@123'  # Secret key for session management, etc.
    SQLALCHEMY_DATABASE_URI = 'sqlite:///users.db'  # SQLite database URI
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable SQLAlchemy track modifications for performance
