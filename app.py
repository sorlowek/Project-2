import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/map_db.sqlite"

db = SQLAlchemy(app)
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)


# Save references to each table
Y2017 = Base.classes.Y2017
Y2016 = Base.classes.Y2016
Y2015 = Base.classes.Y2015
Y2014 = Base.classes.Y2014
Y2013 = Base.classes.Y2013
Y2012 = Base.classes.Y2012
Y2011 = Base.classes.Y2011
Y2010 = Base.classes.Y2010
Y2009 = Base.classes.Y2009
Y2008 = Base.classes.Y2008
Y2007 = Base.classes.Y2007
Y2006 = Base.classes.Y2006
Y2005 = Base.classes.Y2005


@app.route("/")
def home():
    return render_template("index.html")    

@app.route("/places")
def places():
    """Return a place names from database."""

    # Use Pandas to perform the sql query
    results = db.session.query(Y2005.GEOGRAPHY).all()
    print(results)

    # Return a list of the column names (sample names)
    return jsonify(results)    

if __name__ == "__main__":
    app.run()    