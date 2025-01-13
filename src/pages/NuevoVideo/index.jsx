import styles from "./NuevoVideo.module.css";

function NuevoVideo() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Nuevo Video </h1>
        <p>
          Complete el formulario para crear una nueva tarjeta de Video-Receta
        </p>
      </div>
      <section className={styles.formContainer}>
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
            <option value="cena">Cena</option>
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

          <div className={styles.modalBotones}>
            <button type="submit" className={styles.guardar}>
              Guardar
            </button>
            <button type="reset" className={styles.limpiar}>
              Limpiar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default NuevoVideo;
