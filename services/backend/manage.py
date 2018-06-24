from flask.cli import FlaskGroup

from project import create_app,db

app = create_app()

cli = Flaskgroup(create_app= create_app)

@cli_command()
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

if __name__ == '__main__':
    cli()