import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PostalCodeTable from "./PostalCodeTable";
import Loader from "./Loader";
import "./index.css";
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  var cep = 63260000;
  async function fetchData() {
    await fetch("https://viacep.com.br/ws/" + cep + "/json/")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      });
  }
  useEffect(() => {
    fetchData();
    console.log("renderizou");
  }, []);
  useEffect(() => {
    if (data) {
      setIsloading(false);
    }
  }, [data]);
  return isLoading ? <Loader /> : <PostalCodeTable {...data} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
