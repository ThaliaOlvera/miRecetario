import { useState } from "react";
import { useVideoContext } from "../../context/VideosContext";
import styles from "./NuevoVideo.module.css";

const NuevoVideo = () => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    capa: "",
    link: "",
  });

  const isValidImageUrl = (url) => {
    const regex = /\.(jpeg|jpg|png|gif|webp|svg)$/i;
    try {
      const parsedUrl = new URL(url);
      return regex.test(parsedUrl.pathname);
    } catch (error) {
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "capa") {
      if (isValidImageUrl(value) || value === "") {
        setFormData({ ...formData, [name]: value });
      } else {
        alert("Por favor, introduce una URL válida de imagen.");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidImageUrl(formData.capa)) {
      alert("La URL de la imagen no es válida. Por favor, verifica.");
      return;
    }

    addVideo(formData);
    setFormData({
      titulo: "",
      categoria: "",
      capa: "",
      link: "",
    });
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      capa: "",
      link: "",
    });
  };

  return (
    <section className={styles.formContainer}>
      <form className={styles.modalForm} onSubmit={handleSubmit}>
        <label htmlFor="titulo">Titulo:</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          placeholder="Titulo del video"
          onChange={handleChange}
        />

        <label htmlFor="categoria">Categoría:</label>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
        >
          <option value="Desayuno">Desayuno</option>
          <option value="Comida">Comida</option>
          <option value="Cena">Cena</option>
          <option value="Postre">Postre</option>
        </select>

        <label htmlFor="capa">capa (URL):</label>
        <input
          type="url"
          name="capa"
          value={formData.capa}
          placeholder="URL de la Imagen"
          onChange={handleChange}
        />

        <label htmlFor="video">Video (URL):</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          placeholder="URL del video"
          onChange={handleChange}
        />

        <div className={styles.modalBotones}>
          <button type="submit" className={styles.guardar}>
            Guardar
          </button>
          <button type="reset" className={styles.limpiar} onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
};

export default NuevoVideo;
