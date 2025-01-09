import Titulo from "../../componentes/Titulo";
import styles from "./index.module.css";
import Categorias from "../../componentes/Categorias";

function Inicio() {
  return (
    <>
      <Titulo>
        <h1>Un lugar para guardar tus recetas favoritas</h1>
      </Titulo>
      <Categorias />
    </>
  );
}

export default Inicio;
