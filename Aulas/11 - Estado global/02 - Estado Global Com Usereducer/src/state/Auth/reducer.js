import * as controleType from "./type";
function reducer(state, action) {
  switch (action.type) {
    case controleType.ENTRAR:
      return true;
    case controleType.SAIR:
      return action.payload.value;
    default:
      throw new Error();
  }
}
export default reducer;
