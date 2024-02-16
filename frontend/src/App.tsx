import axios from "axios";
import { useState, useEffect } from "react";
import robotGif from "./assets/cute-robot.gif";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");

  // fetch image on first render
  useEffect(() => {
    fetchImage();
  }, []);

  // send image url to /chat endpoint and recieve string gpt response
  const handleSubmit = () => {
    axios
      .post("http://localhost:8081/chat", { url })
      .then((res) => setResponse(res.data))
      .catch((err: any) => {
        console.log(err);
      });
  };

  // fetch image url from /random endpoint
  const fetchImage = () => {
    axios
      .get("http://localhost:8081/random")
      .then((res) => {
        setUrl(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="hero">
        <text className="title">Duck Explorer</text>
        <text className="subtitle">
          Take a journey into nature with artificial intelligence
        </text>
      </div>
      <div className="main">
        <div className="card">
          <div>
            <button className="btn" onClick={handleSubmit}>
              NEW DUCK
            </button>
          </div>
          <img src={url} className="image"></img>
          <div className="bubble bubble-bottom-left">{response}</div>
          <img src={robotGif} width={300}></img>
        </div>
      </div>
    </>
  );
}

export default App;
