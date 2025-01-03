import Header from "componentes/Header/Header.jsx";
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";

function Inicio() {
  return (
    <>
      <Header />
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar tus recetas favoritas</h1>
      </Titulo>
    </>
  );
}

export default Inicio;
