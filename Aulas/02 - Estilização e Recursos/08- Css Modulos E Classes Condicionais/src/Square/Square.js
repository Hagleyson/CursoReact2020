import React from "react";
import styles from "./Square.module.css";
/*no css module eu posso usar os mesmos nomes de classes em varios
 * arquivos
 */
function Square() {
  //passando mais de uma classe
  //passando condicional
  let equadrado = true;

  return (
    <div
      // se for verdadeiro faz o primeiro se for falso null
      // se quiser sumir e só colocar null
      className={[equadrado ? styles.shape : styles.circle, styles.color].join(
        " "
      )}
    />
  );
}

export default Square;
