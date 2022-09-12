from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.nlp import NLP


class Message(BaseModel):
    input: str
    output: str | None = None


app = FastAPI()
nlp = NLP()

origins = [
    "https://localhost",
    "http://localhost:3000",
    "https:127:0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['POST'],
    allow_headers=["*"],
)


@app.post("/summarize/")
async def summarize(message: Message):
    message.output = nlp.generate(prompt=message.input)
    return message.output
