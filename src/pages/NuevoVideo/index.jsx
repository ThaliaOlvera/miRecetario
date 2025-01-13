import { useState } from "react";
import styles from "./NuevoVideo.module.css";

function NuevoVideo() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "desayuno",
    imagen: "",
    video: "",
  });

  const manejoCambioInput = (e) => {
    const { nombre, valor } = e.target;
    setFormData({ formData, [nombre]: valor });
  };

  const manejoEnvio = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch(
        "https://my-json-server.typicode.com/ThaliaOlvera/recetarioDb/videos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(FormData),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al crear el video");
      }

      const newVideo = await respuesta.json();
      console.log("Video creado:", newVideo);

      alert("Video creado con éxito");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al crear el video");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Nuevo Video </h1>
        <p>
          Complete el formulario para crear una nueva tarjeta de Video-Receta
        </p>
        <h2 className={styles.containerSubtitulo}>Crear una Tarjeta</h2>
      </div>
      <section className={styles.formContainer}>
        <form className={styles.modalForm} onSubmit={manejoEnvio}>
          <label htmlFor="titulo">Titulo:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Titulo del video"
            onChange={manejoCambioInput}
          />

          <label htmlFor="categoria">Categoría:</label>
          <select id="categoria" name="categoria" onChange={manejoCambioInput}>
            <option value="desayuno">Desayuno</option>
            <option value="comida">Comida</option>
            <option value="cena">Cena</option>
            <option value="postre">Postre</option>
          </select>

          <label htmlFor="imagen">Imagen (URL):</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            placeholder="URL de la imagen"
            onChange={manejoCambioInput}
          />

          <label htmlFor="video">Video (URL):</label>
          <input
            type="text"
            id="video"
            name="video"
            placeholder="URL del video"
            onChange={manejoCambioInput}
          />

          <div className={styles.modalBotones}>
            <button type="submit" className={styles.guardar}>
              Guardar
            </button>
            <button
              type="reset"
              className={styles.limpiar}
              onClick={() =>
                setFormData({
                  titulo: "",
                  categoria: "desayuno",
                  imagen: "",
                  video: "",
                })
              }
            >
              Limpiar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default NuevoVideo;
