from flask import Flask
from flask_cors import CORS
from config import ALLOWED_ORIGIN

from app.routes.flash_thinking import flash_thinking_bp

def create_app():
    app = Flask(__name__)

    # handle CORS
    CORS(app, resources={r"/*": {"origins": ALLOWED_ORIGIN}})

    app.register_blueprint(flash_thinking_bp, url_prefix="/api")
    return app
