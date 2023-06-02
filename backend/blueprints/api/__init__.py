from flask import Blueprint

bp = Blueprint('api', __name__, url_prefix='/api')

from blueprints.api import routes
from blueprints.api import auth_routes