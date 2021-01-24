import React from "react";
//para trabalhar com props
// quando ele for chamado tem que receber a props
// e dentro dessa props vai receber dois valor gender e name
function Welcome(props) {
  switch (props.gender) {
    case "male":
      return <h1>Bem-Vindo, {props.name}!</h1>;
    case "female":
      return <h1>Bem-Vinda, {props.name}!</h1>;
    default:
      return <h1>Bem-Vindo!</h1>;
  }
}
//outra forma
/*
function Welcome({gender,name}) {
  switch (gender) {
    case "male":
      return <h1>Bem-Vindo, {name}!</h1>;
    case "female":
      return <h1>Bem-Vinda, {name}!</h1>;
    default:
      return <h1>Bem-Vindo!</h1>;
  }
}
*/
//para exportar
export default Welcome;
