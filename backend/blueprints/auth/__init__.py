from flask import Blueprint

bp = Blueprint('auth', __name__, url_prefix='/auth')

from blueprints.auth import routes