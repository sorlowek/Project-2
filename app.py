# setting up the dependencies

import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_cors import CORS


#setting up the engine
engine = create_engine("sqlite:///db/map_db.sqlite")

app = Flask(__name__)
CORS(app)

#creating data frames from the SQLITE file

Y2005_df = pd.read_sql_query("select * from Y2005", engine)
Y2006_df = pd.read_sql_query("select * from Y2006", engine)
Y2007_df = pd.read_sql_query("select * from Y2007", engine)
Y2008_df = pd.read_sql_query("select * from Y2008", engine)
Y2009_df = pd.read_sql_query("select * from Y2009", engine)
Y2010_df = pd.read_sql_query("select * from Y2010", engine)
Y2011_df = pd.read_sql_query("select * from Y2011", engine)
Y2012_df = pd.read_sql_query("select * from Y2012", engine)
Y2013_df = pd.read_sql_query("select * from Y2013", engine)
Y2014_df = pd.read_sql_query("select * from Y2014", engine)
Y2015_df = pd.read_sql_query("select * from Y2015", engine)
Y2016_df = pd.read_sql_query("select * from Y2016", engine)
Y2017_df = pd.read_sql_query("select * from Y2017", engine)

print(Y2005_df.head())


@app.route("/")
def home():
    return render_template("index.html")    

@app.route("/places")
def places():
    """Return a place names from database."""
    results = Y2005_df[['Geography', 'Latitude', 'Longitude']]

    print(results)

    # Return a list of the column names (sample names)
    return results.to_json(orient = 'records')

if __name__ == "__main__":
    app.run(debug=True)    