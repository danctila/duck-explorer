import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetchImage();
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8081/chat", { url })
      .then((res) => setResponse(res.data))
      .catch((err: any) => {
        console.log(err);
      });
  };

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
      <div>
        <button onClick={fetchImage}>Fetch duck image</button>
        <button onClick={handleSubmit}>Get an image an analyze</button>
      </div>
      <img src={String(url)} width={500}></img>
      <h2>{response}</h2>
    </>
  );
}

export default App;
