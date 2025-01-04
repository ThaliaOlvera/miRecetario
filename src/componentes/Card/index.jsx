import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Card.module.css";
import iconHeathFill from "./iconHeathFill.png";
import iconHeathEmpty from "./iconHeathEmpty.png";

function Card({ id, capa, titulo }) {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconHeathFill : iconHeathEmpty;
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo} </h2>
      <img
        src={icon}
        alt="Icono Favorito"
        className={styles.favorite}
        onClick={() => agregarFavorito({ id, titulo, capa })}
      />
    </div>
  );
}

export default Card;
