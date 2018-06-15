from flask import request,redirect
from . import app
import os

@app.route('/login',methods = ['POST'])
def token_gen():
    req_data = request.get_json()
    req_data = os.environ.get('CLIENT_ID')
    req_data = os.e