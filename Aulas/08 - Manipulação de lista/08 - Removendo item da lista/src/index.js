import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [games, setGames] = useState([
    { id: "0", title: "Guitar Hero", release: 2005 },
    { id: "1", title: "GTA: San Andreas", release: 2004 },
    { id: "2", title: "Resident Evil 4", release: 2005 },
    { id: "3", title: "Shadow of the Colossus", release: 2005 },
    { id: "4", title: "God of War II", release: 2007 },
    { id: "5", title: "Dragon Ball Z: Budokai 3", release: 2004 },
    { id: "6", title: "Onimusha 3: Demon Siege", release: 2004 },
    { id: "7", title: "Call of Duty 3", release: 2006 },
    { id: "8", title: "Gran Turismo 4", release: 2004 },
    { id: "9", title: "Black", release: 2006 }
  ]);
  //adicionando na lista
  const handleCreate = useCallback(() => {
    setGames(games.concat({ id: "9", title: "Black", release: 2006 }));
  }, [games, setGames]);
  //atualizando ma lista
  const handleUpdate = useCallback(() => {
    setGames(
      games.map((cur) => {
        if (cur.id === "1") {
          return { ...cur, title: "GTA III" };
        } else {
          return cur;
        }
      })
    );
  }, [setGames, games]);
  //deletando
  const handleDelete = useCallback(() => {
    setGames(
      games.filter((cur) => {
        return cur.id !== "7";
      })
    );
  }, [setGames, games]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Lançamento</th>
          </tr>
        </thead>
        <tbody>
          {games.map((cur) => {
            return (
              //preenchendo os dados automaticamente
              //key a chave do objeto nesse caso o ID
              <tr key={cur.id}>
                <td>{cur.title}</td>
                <td>{cur.release}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleCreate}>adicionar</button>
      <button onClick={handleUpdate}>atualizar</button>
      <button onClick={handleDelete}>Deletar</button>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
