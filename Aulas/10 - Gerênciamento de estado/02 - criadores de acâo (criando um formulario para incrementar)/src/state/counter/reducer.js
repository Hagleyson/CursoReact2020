//IMPORTANDO TODOS
import * as counterTypes from "./type.js";
/* IMPORTAÇÃO NOMEADA
import { INCREMENT, DECREMENT, ZERAR } from "./type.js";
*/

//reducer é uma função que recebe o state e uma ação
function counterReducer(state, action) {
  /*action type e como se fosse o identificador da ação 
    onde ela diz a alteração que vai causar no state    
    action.type e string e passado em letra maiúscula
  */
  switch (action.type) {
    case counterTypes.INCREMENT:
      return state + action.payload.value;
    case counterTypes.DECREMENT:
      return state - action.payload.value;
    case counterTypes.ZERAR:
      return (state = 0);
    default:
      //para casi de um erro
      throw new Error();
  }
}
export default counterReducer;
