import React, { useState } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import "../componentCss/webcam.css";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "user",
  };
  const [name, setName] = useState("");
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`);
    //for deployment, you should put your backend url / api
    axios
      .post("http://127.0.0.1:5000/api", { data: imageSrc })
      .then((res) => {
        console.log(`response = ${res.data}`);
        setName(res.data);
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  }, [webcamRef]);

  return (
    <div className="container">

      <div className="header">
        <h1> Welcome </h1>
      </div>


      <Webcam
        audio={false}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
      />

      <div id="button"> 
        <button className='btn' onClick={capture}>Click Me!</button>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default WebcamCapture;
