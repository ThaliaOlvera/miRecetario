import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import styles from "./Favoritos.module.css";
import { useFavoritosContext } from "../../context/Favoritos";
import Card from "../../componentes/Card";

function Favoritos() {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Titulo>
        <h1>Mis Favortitos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
