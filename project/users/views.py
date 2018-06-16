from flask import Blueprint,request,jsonify,session
from project import db,token_required
from project.models import User,Fyle_Tokens
import jwt
import datetime

users_blueprint = Blueprint('users',__name__)

@users_blueprint.route('/users_login',methods = ['POST'])
def new_login():
    new_user = User(public_id = session['user_id'],user_email = session['username'])
    token = jwt.encode({ 'publc_id' : new_user.publc_id,'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes = 60)},app.config['SECRET_KEY'])
    db.session.add(new_user)
    db.session.commit()
    current_user = User.query.filter_by(public_id = session['user_id']).first()
    newFyleToken = Fyle_Tokens(updated_at = datetime.datetime.utcnow(),user_id = current_user.id,username = session['username'],tokens = json.dumps(session['res_text']))
    db.session.add(newFyleToken)
    db.session.commit()
    return jsonify({ 'token' : token.decode('UTF-8'),'user_id' : current_user.public_id})

@users_blueprint.route('/users-create-password',methods = ['POST'])
@token_required
def create_password(current_user):
    req_data = request.get_json()
    user = User.query