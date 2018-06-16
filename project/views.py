from flask import request,redirect,make_response,jsonify,session
from . import app,db
from werkzeug.security import check_password_hash
from project.models import User,Fyle_Tokens
import os
import json
import requests
import jwt
import datetime

validation = (
    (lambda s : 'fyle.in' in s, "invalid user")  
)

@app.route('/tokenGen',methods = ['POST'])
def token_gen():
    req_data = request.get_json()
    req_data['client_id'] = os.getenv('CLIENT_ID')
    req_data['client_secret'] = os.getenv('CLIENT_SECRET')
    req_data['grant_type'] = 'authorization_code'
    resToken = requests.post(url = 'https://staging.fyle.in/api/oauth/token',headers = {'Content-Type' : 'Application/json'},json = req_data)
    if resToken.status_code == 200:
        resTokenDict = json.loads(resToken.text)
        resCred = requests.get('https://staging.fyle.in/api/eous/current',headers = {'x-auth-token' : resTokenDict['access_token']})
        if resCred.status_code == 200:
            resCredDict = json.loads(resCred)
            for valid,message in validation:
                if not valid(resCredDict['us_email']):
                    return make_response(message,403)
            old_user = User.query.filter_by(public_id = resCredDict['us_id']).first()
            if not old_user:
                session['username'] = resCredDict['us_email']
                session['user_id'] = resCredDict['us_id']
                session['res_text'] = resTokenDict
                return redirect('/users-login')
            token = jwt.encode({ 'public_id' : old_user.public_id,'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes = 60)},app.config['SECRET_KEY'])
            fyle_token = Fyle_Tokens.query.filter_by(user_id = old_user.id).first()
            tokens = json.loads(fyle_token.tokens)
            tokens['access_token'] = resTokenDict['access_token']
            fyle_token.tokens = json.dumps(tokens)
            fyle_token.updated_at = datetime.datetime.utcnow()
            db.session.commit()
            return jsonify({ 'token' : token.decode('UTF-8'),'user_id' : old_user.public_id })
    return make_response("Error Occured",500)

@app.route('/login',methods = ['POST'])
def login():
    auth = request.authorization

    if not auth or not auth.email or not auth.password:
        return make_response('Could not verify',401,{'WWW-Authenticate' : 'Basic realm="Logic required"'})

    user = User.query.filter_by(email = auth.email).first()

    if not user:
        return make_response('Could not verify',401,{'WWW-Authenticate' : 'Basic realm="Login required"'})

    if(check_password_hash(user.password_hash,auth.password)):
        token = jwt.encode({ 'public_id' : user.public_id,'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes = 60)},app.config(['SECRET_KEY']))

        return jsonify({ 'token' : token.decode('UTF-8')})
    
    return make_response('Could not verify',401,{'WWW-Authenticate' : 'Basic realm="Login required"'})
    