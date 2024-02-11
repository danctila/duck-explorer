import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const fetchImage = () => {
    axios
      .get("http://localhost:8081/random")
      .then((res) => {
        setData(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <button onClick={fetchImage}>Fetch duck image</button>
      </div>
      <img src={String(data)} width={500}></img>
    </>
  );
}

export default App;
