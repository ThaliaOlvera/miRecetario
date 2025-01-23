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
        {favorito
          .filter((video) => video && typeof video === "object" && video.id)
          .map((video) => (
            <Card key={video.id} video={video} />
          ))}
      </section>
    </>
  );
}

export default Favoritos;
