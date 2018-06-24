from project import db
from sqlalchemy.dialects.postgresql import JSON

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer,primary_key = True)
    public_id = db.Column(db.String,unique = True)
    user_email = db.Column(db.String(64),index = True, unique = True)
    password_hash = db.Column(db.String(128),nullable = True)
    fyleToken = db.relationship('Fyle_Tokens',backref = 'user',lazy = True)

    def __repr__(self):
        return '<User {}>'.format(self.user_email)

class Fyle_Tokens(db.Model):
    __tablename__ = "fyle_tokens"

    username = db.Column(db.String,primary_key = True)
    tokens = db.Column(JSON)
    updated_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'),nullable = False)