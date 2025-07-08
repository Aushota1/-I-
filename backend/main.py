from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import secrets
import logging

# Настройка логгирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# CORS настройки
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Моковая база данных
users_db = {}

class UserRegister(BaseModel):
    email: str
    firstName: str
    lastName: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/api/auth/register")
async def register(user: UserRegister):
    logger.info(f"Registration attempt for: {user.email}")
    
    if user.email in users_db:
        logger.warning(f"Email already exists: {user.email}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # В реальном приложении должно быть хеширование пароля!
    users_db[user.email] = user.dict()
    logger.info(f"User registered: {user.email}")
    
    return {
        "status": "success",
        "message": "Registration successful",
        "email": user.email
    }

@app.post("/api/auth/login")
async def login(user: UserLogin):
    logger.info(f"Login attempt for: {user.email}")
    
    if user.email not in users_db or users_db[user.email]["password"] != user.password:
        logger.warning(f"Invalid credentials for: {user.email}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    token = secrets.token_hex(16)
    logger.info(f"User logged in: {user.email}")
    
    return {
        "status": "success",
        "token": token,
        "user": {
            "email": user.email,
            "firstName": users_db[user.email]["firstName"],
            "lastName": users_db[user.email]["lastName"]
        }
    }

@app.get("/api/test")
async def test_endpoint():
    return {"message": "API is working!"}