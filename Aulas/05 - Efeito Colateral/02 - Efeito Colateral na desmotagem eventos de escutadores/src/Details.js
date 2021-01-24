import React, { useCallback, useEffect } from "react";
function Details({ closed }) {
  const handleKeyDown = useCallback((evt) => {
    //key code é o numero da tecla tipo um id
    if (evt.keyCode === 27) {
      console.log("esc clicado");
      closed();
    }
  }, []);
  useEffect(() => {
    //na montagem
    console.log("Renderizou!");
    //window.addEventListener é um escutador
    //quando clicar em uma tecla
    window.addEventListener("keydown", handleKeyDown);
    //na desmontagem
    return () => {
      //removendo escutador
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Commodo viverra
        maecenas accumsan lacus vel facilisis volutpat est velit. Sit amet
        tellus cras adipiscing enim eu turpis egestas. Diam phasellus vestibulum
        lorem sed risus ultricies tristique nulla. Eu ultrices vitae auctor eu
        augue ut lectus arcu bibendum. Purus in massa tempor nec feugiat nisl.
        Ultrices mi tempus imperdiet nulla malesuada pellentesque. Enim nulla
        aliquet porttitor lacus luctus accumsan tortor.
      </p>
    </div>
  );
}

export default Details;
