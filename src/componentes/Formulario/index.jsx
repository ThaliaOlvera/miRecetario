import { useState } from "react";
import styles from "./Formulario.module.css";

function Formulario({ registrarVideo }) {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "desayuno",
    imagen: "",
    video: "",
  });

  const manejoDelEnvio = (e) => {
    e.preventDefault();

    // Validación simple para evitar campos vacíos
    if (!formData.titulo || !formData.imagen || !formData.video) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    try {
      registrarVideo({ ...formData }); // Usar spread operator para enviar el objeto completo
    } catch (error) {
      console.error("Error al registrar el video:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Desestructurar name y value del input/select
    setFormData((prevData) => ({
      ...prevData, // Mantener los valores anteriores
      [name]: value, // Actualizar solo el campo correspondiente
    }));
  };

  return (
    <section className={styles.formContainer}>
      <form className={styles.modalForm} onSubmit={manejoDelEnvio}>
        <label htmlFor="titulo">Titulo:</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo} // Usar el valor de formData
          placeholder="Titulo del video"
          onChange={handleChange} // Usar una sola función para manejar cambios
        />

        <label htmlFor="categoria">Categoría:</label>
        <select
          name="categoria"
          value={formData.categoria} // Usar el valor de formData
          onChange={handleChange}
        >
          <option value="desayuno">Desayuno</option>
          <option value="comida">Comida</option>
          <option value="cena">Cena</option>
          <option value="postre">Postre</option>
        </select>

        <label htmlFor="imagen">Imagen (URL):</label>
        <input
          type="text"
          name="imagen"
          value={formData.imagen} // Usar el valor de formData
          placeholder="URL de la imagen"
          onChange={handleChange}
        />

        <label htmlFor="video">Video (URL):</label>
        <input
          type="text"
          name="video"
          value={formData.video} // Usar el valor de formData
          placeholder="URL del video"
          onChange={handleChange}
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
  );
}

export default Formulario;
