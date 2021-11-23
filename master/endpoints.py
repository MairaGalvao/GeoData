from flask import Flask, make_response, jsonify
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)


@app.route("/treeview")
def treeview():

  resp = None
  with open("tree.json", "r") as f:
    resp = json.loads(f.read())

  return make_response(jsonify(resp)), 200


@app.route("/mapview")
def mapview():

  resp = None
  with open("map.json", "r") as f:
    resp = json.loads(f.read())

  return make_response(jsonify(resp)), 200



@app.route("/")
def index():

  resp = {
    "status" : "success",
    "data" : {
      "message" : "Netlume's take home project API is up and running."
    }
  }

  return make_response(jsonify(resp)), 200




if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
