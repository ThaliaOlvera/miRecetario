import { useState } from "react";
import styles from "./Modal.module.css";
import { useVideoContext } from "../../context/VideosContext";

function Modal({ cerrarModal }) {
  return (
    <div className={styles.efectoModal}>
      <div className={styles.modalContenedor}>
        <h2 className={styles.modalTitulo}>Editar</h2>
        <button className={styles.cerrarBtn} onClick={cerrarModal}>
          X
        </button>
      </div>
      <form className={styles.modalForm} onSubmit={handleSubmit}>
        <label htmlFor="titulo">Titulo:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          placeholder="Titulo del video"
        />

        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
        >
          <option value="Desayuno">Desayuno</option>
          <option value="Comida">Comida</option>
          <option value="Postre">Postre</option>
        </select>

        <label htmlFor="capa">Imagen (URL):</label>
        <input
          type="url"
          id="capa"
          name="capa"
          value={formData.capa}
          onChange={handleChange}
          placeholder="URL de la imagen"
        />

        <label htmlFor="link">Video (URL):</label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="URL del video"
        />

        <div className={styles.modalBotones}>
          <button type="submit" className={styles.guardar}>
            Guardar
          </button>
          <button type="reset" className={styles.limpiar}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
