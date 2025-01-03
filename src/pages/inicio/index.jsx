import Header from "componentes/Header/Header.jsx";
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";

function Inicio() {
  return (
    <>
      <Header />
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar tus recetas favoritas</h1>
      </Titulo>
      <Card
        id="1"
        titulo="Greek Salad"
        capa="https://img.freepik.com/psd-gratis/ensalada-aguacate-tomate-fresco-cuenco-blanco-sobre-fondo-transparente_84443-27639.jpg?t=st=1735943298~exp=1735946898~hmac=62c1461b170ef7531f7e81e72c14f7a26d69f6c9d3724df00c4edd5876c83844&w=826"
      />
    </>
  );
}

export default Inicio;
