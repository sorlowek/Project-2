import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
#from flask_sqlalchemy import SQLAlchemy



#app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/map_db.sqlite"


engine = create_engine("sqlite:///db/map_db.sqlite")

app = Flask(__name__)

#create loop

test_df = pd.read_sql_query("select * from Y2005", engine)
test_df = pd.read_sql_query("select * from Y2006", engine)
test_df = pd.read_sql_query("select * from Y2007", engine)
test_df = pd.read_sql_query("select * from Y2008", engine)
test_df = pd.read_sql_query("select * from Y2009", engine)
test_df = pd.read_sql_query("select * from Y2010", engine)
test_df = pd.read_sql_query("select * from Y2011", engine)
test_df = pd.read_sql_query("select * from Y2012", engine)
test_df = pd.read_sql_query("select * from Y2013", engine)
test_df = pd.read_sql_query("select * from Y2014", engine)
test_df = pd.read_sql_query("select * from Y2015", engine)
test_df = pd.read_sql_query("select * from Y2016", engine)
test_df = pd.read_sql_query("select * from Y2017", engine)

print(test_df.head())


@app.route("/")
def home():
    return render_template("index.html")    

@app.route("/places")
def places():
    """Return a place names from database."""

    # Use Pandas to perform the sql query
    results = db.session.query(Y2005.GEOGRAPHY).all()

    # Return a list of the column names (sample names)
    return jsonify(results)

if __name__ == "__main__":
    app.run()    