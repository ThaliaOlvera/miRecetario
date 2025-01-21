import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Card.module.css";
import iconHeathFill from "./iconHeathFill.png";
import iconHeathEmpty from "./iconHeathEmpty.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal";
import { useVideoContext } from "../../context/VideosContext";

const Card = ({ video }) => {
  const { deleteVideo } = useVideoContext();
  const { favorito, agregarFavorito } = useFavoritosContext();
  const [modalAbierto, setModalAbierto] = useState({ visible: false });

  if (!video || !video.id) {
    console.error("El objeto video no es válido:", video);
    return null;
  }

  const isFavorito = favorito.some((fav) => fav.id === video.id);
  const icon = isFavorito ? iconHeathFill : iconHeathEmpty;

  const abrirModal = () => {
    const nuevoEstado = { ...modalAbierto, visible: true };
    setModalAbierto(nuevoEstado);
  };

  const cerrarModal = () => {
    const nuevoEstado = { ...modalAbierto, visible: false };
    setModalAbierto(nuevoEstado);
  };

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`${video.id}`}>
        <img src={video.capa} alt={video.titulo} className={styles.capa} />
        <h2>{video.titulo} </h2>
      </Link>

      <div className={styles.containerBtn}>
        <img
          src={icon}
          alt="Icono Favorito"
          className={styles.favorite}
          onClick={() => agregarFavorito(video)}
        />
        <button type="button" onClick={abrirModal}>
          Editar
        </button>
        <button type="button" onClick={() => deleteVideo(video.id)}>
          Borrar
        </button>
      </div>

      {modalAbierto.visible && (
        <Modal video={video} cerrarModal={cerrarModal} />
      )}
    </div>
  );
};

export default Card;
