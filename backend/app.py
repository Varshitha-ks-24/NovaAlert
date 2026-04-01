from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample events data (later from DB)
events = [
    {"id": 1, "title": "AI Hackathon", "category": "AI"},
    {"id": 2, "title": "Web Dev Workshop", "category": "Web"},
    {"id": 3, "title": "Data Science Internship", "category": "Data"}
]

@app.route("/")
def home():
    return "NovaAlert Backend Running 🚀"

# Get all events
@app.route("/events", methods=["GET"])
def get_events():
    return jsonify(events)

# Filter events based on interest
@app.route("/recommend", methods=["POST"])
def recommend():
    user_interest = request.json.get("interest")

    filtered = [e for e in events if e["category"].lower() == user_interest.lower()]
    return jsonify(filtered)

if __name__ == "__main__":
  import os

app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))