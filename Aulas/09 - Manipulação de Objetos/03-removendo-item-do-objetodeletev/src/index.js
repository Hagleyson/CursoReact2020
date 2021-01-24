import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [seach, setSeach] = useState({
    duration: {
      min_duration: 10,
      max_duration: 40
    },
    min_rating: 4,
    max_price: 20
  });
  const handleCreate = useCallback(() => {
    let newSearch = { ...seach };
    newSearch.sort = "price";
    setSeach(newSearch);
  }, [setSeach, seach]);
  const handlDelete = useCallback(() => {
    let newSearch = { ...seach };
    delete newSearch.min_rating;
    delete newSearch.max_price;
    delete newSearch.duration;
    delete newSearch.sort;
    setSeach(newSearch);
  }, [setSeach, seach]);
  return (
    <>
      {seach.duration && (
        <p>
          {" "}
          Duração entre {seach.duration.min_duration} e{" "}
          {seach.duration.max_duration}
        </p>
      )}
      {seach.min_rating && (
        <p>Avaliação mínima de {seach.min_rating} estrelas.</p>
      )}
      {seach.max_price && <p>Preço máximo de R$ {seach.max_price} reais.</p>}
      {seach.sort && <p>Ordenando pelo {seach.sort}.</p>}
      <button onClick={handleCreate}>Adicionar (create)</button>
      <button onClick={handlDelete}>Remover(Delete)</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
