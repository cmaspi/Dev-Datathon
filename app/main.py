from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from nlp import NLP
import uvicorn


class Message(BaseModel):
    input: str


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
    success = True
    try:
        summary = nlp.summarize(reviews=message.input)
    except Exception:
        summary = 'Couldn\'t generate summary'
        success = False
    finally:
        return {
                "success": success,
                "summary": summary
                }


if __name__ == '__main__':
    uvicorn.run(app, port=1234, host='0.0.0.0')
