import React from "react";
//passando uma props color
function Square({ color, borderr }) {
  //toda vez que for usar um objeto utilizar chave duas vezes
  /*
  const style = {
    width: "100%",
    border: "2px solid gold",
    height: "100px",
    //passando uma cor
    backgroundColor: color
  };
  para usar uma objeto desse e so passar no style da div;
  */
  return (
    <div
      style={{
        width: "100%",
        border: borderr,
        height: "100px",
        //passando uma cor
        backgroundColor: color
      }}
    />
  );
}
export default Square;
