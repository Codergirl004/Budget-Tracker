from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from config import Config

# Initialize the Flask app
app = Flask(__name__)
app.config.from_object(Config)

# Initialize the SQLAlchemy object
db = SQLAlchemy(app)

# Import models here after db is initialized
from models import User

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    
    user = User.query.filter_by(email=email).first()
    if user and user.password == password:
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route("/register", methods=["POST"])
def register():
    email = request.json.get("email")
    password = request.json.get("password")
    
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 400

    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

if __name__ == "__main__":
    app.run(debug=True)

