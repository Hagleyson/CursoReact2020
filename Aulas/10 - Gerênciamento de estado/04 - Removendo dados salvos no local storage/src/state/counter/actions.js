import * as counterTypes from "./type.js";

//action create
export function increment(inputValue) {
  return {
    type: counterTypes.INCREMENT,
    payload: { value: +inputValue }
  };
}
export function decrement(inputValue) {
  return {
    type: counterTypes.DECREMENT,
    //esse mais é para converter a string em número
    payload: { value: +inputValue }
  };
}

export const zerar = { type: counterTypes.ZERAR };
