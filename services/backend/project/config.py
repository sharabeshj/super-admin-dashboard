import os

class BaseConfig:
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'y\xe0 \xeb\xe3\xf8\x7f\x83)z\xd8Js\xd7]\xf9N#\xf1\x12\x11\r\x06\x8e'

class DevelopmentConfig:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')

class TestingConfig:
    TESTING = True

class ProductionConfig:
    pass