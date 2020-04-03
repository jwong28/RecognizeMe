import os
import json
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

extensions = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

@app.route("/api/upload", methods = ['POST'])
@cross_origin()
def upload():

    arr = {"data": "hello","title": "world"}
    return json.dumps(arr)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)