from project import db

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer,primary_key = True)
    user_email = db.Column(db.String(64),index = True, unique = True)
    password_hash = db.Column(db.String(128),nullable = True)

    def __repr__(self):
        return '<User {}>'.format(self.user_email)