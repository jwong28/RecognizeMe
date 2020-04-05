import os
import json
import sys
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

extensions = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

@app.route("/api/upload", methods = ['POST'])
# @cross_origin()
def upload():
    files = request.files['file']
    print(files, file = sys.stderr)
    # files.st_size
    # filename = request.data['filename']
    # arr = {"message": "Image uploaded","title": "world"}
    # return({"data": request.get_data()})
    tag = request.form['filename']
    getData(tag, files)
    return {"data":tag, "title":files.filename}
    # return {"data": tag}

def getData(tag, files):
    print(tag.split(),file = sys.stderr)
    print(files.filename,file = sys.stderr)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)