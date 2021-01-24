/* Como o react é uma biblioteca
 *  sempre tem que importar ela
 */
import React from "react";
//react-dom é a biblioteca responsável por rederizar na tela
import ReactDom from "react-dom";
/* os componentes são funções*/
//componente principal App(){}
/* Os elementos que compõem
 * o componente ficam dentro do return
 */
function App() {
  //createElement gerar os elementos
  // ele recebe 3 parametros
  // 1 elemento tag html que vai ser utilizado
  // 2 elemento classe (chama no react => className)
  //caso não queira coloque null
  // 3 o filho dessa tag pode ser texto ou criar outro elemento
  return React.createElement("h1", { className: "title" }, "Hello World!");
  //usando JSX
  // return <h1 className="title">Hello World!</h1>
}
//método para renderizar
//primeiro passa o elemento
// segundo onde vai renderizar o documento
ReactDom.render(React.createElement(App), document.getElementById("root"));
//usando JSX
//ReactDom.render(<App />, document.getElementById("root"));
