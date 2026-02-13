from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
import os
import uuid

load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.secret_key = "career_secret_key"

# ---------------- GROQ SETUP ----------------

llm = ChatGroq(
    api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile",
    temperature=0.6,
    max_tokens=250
)

SYSTEM_PROMPT = """
You are a professional career counselor.

RULES:
- Keep answers short (5–8 lines)
- Use bullet points (•)
- Give practical advice
"""

memory_store = {}

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    session_id = data.get("session_id")

    if not session_id:
        session_id = str(uuid.uuid4())

    if session_id not in memory_store:
        memory_store[session_id] = []

    memory_store[session_id].append(
        {"role": "user", "content": user_message}
    )

    messages = [SystemMessage(content=SYSTEM_PROMPT)]

    for msg in memory_store[session_id][-6:]:
        if msg["role"] == "user":
            messages.append(HumanMessage(content=msg["content"]))
        else:
            messages.append(AIMessage(content=msg["content"]))

    response = llm.invoke(messages).content

    memory_store[session_id].append(
        {"role": "assistant", "content": response}
    )

    return jsonify({
        "reply": response,
        "session_id": session_id
    })

if __name__ == "__main__":
    app.run(debug=True, port=5001)
