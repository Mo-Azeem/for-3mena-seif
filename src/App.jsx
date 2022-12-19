import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import useApi from "./hooks/useApi";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const { get } = useApi();
    get("/products")
      .then((response) => setData(response))
      .then(() => console.log(data));
  }, []);

  if (!data) return <h1>Loading...</h1>;

  return <div className="">
    {}
  </div>;
}

export default App;
