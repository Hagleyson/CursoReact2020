import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PostalCodeTable from "./PostalCodeTable";
import Loader from "./Loader";
import "./index.css";
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  //buscar algo na internet
  //async par a dizer que é uma função asssicrona
  async function fetchData() {
    //vai receber a url em forma de string
    //await que é uma operação assicrona
    await fetch("https://cep.awesomeapi.com.br/json/05424020")
      //.then() caso a pesquisa de certo
      .then((res) => {
        return res.json();
      }) //.then de baixo age com os dados obtidos do then acima
      .then((resp) => {
        //setanado o valor em data
        setData(resp);
      })
      //.catch() caso de um errado na requisição
      .catch((err) => {
        console.log(err);
      })
      //finally() será executado caso de certo ou errado
      .finally(() => {
        console.log("Finally");
      });
  }
  useEffect(() => {
    fetchData();
    console.log("renderizou");
  }, []);
  //controlando loading
  useEffect(() => {
    if (data) {
      setIsloading(false);
    }
  }, [data]);
  return isLoading ? <Loader /> : <PostalCodeTable {...data} />;
}

ReactDOM.render(<App />, document.getElementById("root"));