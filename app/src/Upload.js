import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      responseMsg: "",
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    let headers = new Headers();

    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      // mode: 'no-cors',
      body: data,
      headers: headers,
    }).then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.setState({responseMsg: data.title})
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Name" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <div> {this.state.responseMsg} </div>
      </form>
    );
  }
}

export default Upload;