import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Card.module.css";
import iconHeathFill from "./iconHeathFill.png";
import iconHeathEmpty from "./iconHeathEmpty.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal";

function Card({ id, capa, titulo }) {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const [modalAbierto, setModalAbierto] = useState(false);

  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconHeathFill : iconHeathEmpty;

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo} </h2>
      </Link>
      <div className={styles.containerBtn}>
        <img
          src={icon}
          alt="Icono Favorito"
          className={styles.favorite}
          onClick={() => agregarFavorito({ id, titulo, capa })}
        />
        <button type="button" onClick={abrirModal}>
          Editar
        </button>
        <button type="button">Borrar</button>
      </div>

      {modalAbierto && <Modal cerrarModal={cerrarModal} />}
    </div>
  );
}

export default Card;
