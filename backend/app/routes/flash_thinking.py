import requests
from flask import Blueprint, request, jsonify
from config import API_URL, API_KEY
from app.utils.utils import generate_question_prompt, extract_questions

flash_thinking_bp = Blueprint("flash_thinking", __name__)

@flash_thinking_bp.route("/generate-questions", methods=["POST"])
def generate_questions():
    try:
        data = request.get_json()
        passage = data.get("passage")

        if not passage:
            return jsonify({"error": "Passage is required"}), 400

        prompt = generate_question_prompt(passage)
        headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": "google/gemini-2.0-flash-thinking-exp:free",
            "messages": [{"role": "user", "content": prompt}],
        }
        
        response = requests.post(API_URL, headers=headers, json=payload)
        response_data = response.json()

        if response.status_code == 200 and "choices" in response_data:
            raw_content = response_data["choices"][0]["message"]["content"]
            # Extract list of questions from api response
            questions_list = extract_questions(raw_content)
            if questions_list:
                return jsonify({"questions": questions_list})

        return jsonify({"error": "API request failed", "message": response_data}), response.status_code

    except requests.exceptions.RequestException as e:
        return jsonify({"error": "Failed to connect to API", "message": str(e)}), 500
