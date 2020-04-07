import React, { useState, useRef} from 'react';

const Upload = props => {
  const [responseMsg,setResponseMsg] = useState('');
  const uploadInput = useRef();
  const fileName = useRef();

  const handleUploadImage = event => {
    event.preventDefault();

    let headers = new Headers();

    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const data = new FormData();
    data.append('file', uploadInput.current.files[0]);
    data.append('filename', fileName.current.value);

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
      setResponseMsg(data.title);
    });
  }

  return (
    <form onSubmit={e => handleUploadImage(e)}>
      <div>
        <input ref={uploadInput} type="file" />
      </div>
      <div>
        <input ref={fileName} type="text" placeholder="Name" />
      </div>
      <br />
      <div>
        <button>Upload</button>
      </div>
      <div> {responseMsg} </div>
    </form>
  );
}
export default Upload;