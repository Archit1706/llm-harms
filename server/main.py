from fastapi import FastAPI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import time

app = FastAPI()


@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}


class ChatRequest(BaseModel):
    context: Optional[str] = None
    prompt: str


@app.post("/api/chat")
async def chat(request: ChatRequest):
    if not request.prompt:
        raise HTTPException(status_code=400, detail="Prompt is required")

    response_text = generate_response(request.context, request.prompt)
    time.sleep(2)
    return {"response": response_text}


def generate_response(context: Optional[str], prompt: str) -> str:
    response = f"Received context: {context} and prompt: {prompt}"
    # use llm model here to generate response
    return response


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)
