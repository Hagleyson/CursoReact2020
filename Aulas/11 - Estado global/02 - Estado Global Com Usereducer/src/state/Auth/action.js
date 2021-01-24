import * as controleType from "./type";
export function Sair() {
  return { type: controleType.SAIR, payload: { value: false } };
}
export function Entrar() {
  return { type: controleType.ENTRAR, payload: { value: true } };
}
