import os
import json
import sys
import pymongo
from flask import Flask, request, Blueprint
from flask_cors import CORS, cross_origin

# Blueprints
from upload.upload import upload_blueprint


app = Flask(__name__)
app.register_blueprint(upload_blueprint)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

# Mongodb connection
client = pymongo.MongoClient("mongodb+srv://recognizeMe:recognizeMe123@cluster0-8iyfq.mongodb.net/test?retryWrites=true&w=majority")
db = client.test

extensions = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

# @app.route("/")
# def test():
#     print("Hello world")

# @app.route("/api/upload", methods = ['POST'])
# @cross_origin()
# def upload():
#     files = request.files['file']
#     print(files, file = sys.stderr)
#     # files.st_size
#     # filename = request.data['filename']
#     # arr = {"message": "Image uploaded","title": "world"}
#     # return({"data": request.get_data()})
#     tag = request.form['filename']
#     getData(tag, files)
#     return {"data":tag, "title":files.filename}
#     # return {"data": tag}

# def getData(tag, files):
#     print(tag.split(),file = sys.stderr)
#     print(files.filename,file = sys.stderr)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port='5000', debug=True)

# in terminal Run
# export FLASK_APP=index.py
# flask run