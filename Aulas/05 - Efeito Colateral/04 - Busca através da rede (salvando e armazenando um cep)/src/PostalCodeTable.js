import React from "react";

function PostalCodeTable(props) {
  return (
    <table>
      <thead>
        <th>Cep</th>
        <th>Endereço</th>
        <th>Bairro</th>
        <th>Cidade</th>
        <th>Estado</th>
      </thead>
      <tbody>
        <tr>
          <td>{props.cep}</td>
          <td>{props.logradouro}</td>
          <td>{props.bairro}</td>
          <td>{props.localidade}</td>
          <td>{props.uf}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default PostalCodeTable;
