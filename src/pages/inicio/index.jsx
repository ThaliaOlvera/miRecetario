import Titulo from "../../componentes/Titulo";
import Categorias from "../../componentes/Categorias";
import "../../pages/inicio/index.module.css";

const Inicio = () => {
  return (
    <>
      <Titulo>
        <h1>UN LUGAR PARA GUARDAR TUS RECETAS FAVORITAS</h1>
      </Titulo>
      <Categorias />
    </>
  );
};

export default Inicio;
