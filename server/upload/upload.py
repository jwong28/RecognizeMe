import sys
from flask import Blueprint, render_template, request

upload_blueprint = Blueprint('upload',__name__)

@upload_blueprint.route('/')
def hello():
    return ("hello")

@upload_blueprint.route('/api/upload')
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