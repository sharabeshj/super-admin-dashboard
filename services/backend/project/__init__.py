from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from project.api.models import User
from functools import wraps
import jwt
import os


db = SQLAlchemy()
# migrate = Migrate(app,db)

def create_app(script_info=None):

    #instantiate the app
    app = Flask(__name__)

    #set config
    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    #set up extensions
    from project.api.users import users_blueprint
    app.register_blueprint(users_blueprint)

    #shell context for flask cli
    app.shell_context_processor({ 'app' : app, 'db' : db })
    return app

def token_required(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return jsonify({'message' : 'Token is missing'})
        try:
            data = jwt.decode(token,app.config(['SECRET_KEY']))
            current_user = User.query.filter_by(public_id = data['public_id']).first()
        except:
            return jsonify({ "message" : 'Token is invalid'})

        return f(current_user,*args,**kwargs)
    
    return decorated


from . import views


from project import models