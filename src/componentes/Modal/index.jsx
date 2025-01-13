import styles from "./Modal.module.css";

function Modal({ cerrarModal }) {
  return (
    <div className={styles.efectoModal}>
      <div className={styles.modalContenedor}>
        <h2>Editar Card</h2>
        <button className={styles.cerrarBtn} onClick={cerrarModal}>
          X
        </button>
      </div>
      <form className={styles.modalForm}>
        <label htmlFor="titulo">Titulo:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo del video"
        />

        <label htmlFor="categoria">Categoría:</label>
        <select id="categoria" name="categoria">
          <option value="desayuno">Desayuno</option>
          <option value="comida">Comida</option>
          <option value="postre">Postre</option>
        </select>

        <label htmlFor="imagen">Imagen (URL):</label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          placeholder="URL de la imagen"
        />

        <label htmlFor="video">Video (URL):</label>
        <input
          type="text"
          id="video"
          name="video"
          placeholder="URL del video"
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Añade una descripción"
        ></textarea>

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
