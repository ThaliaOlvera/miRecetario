import { useEffect, useState } from "react";
import Titulo from "../../componentes/Titulo";
import Categorias from "../../componentes/Categorias";
import styles from "./index.module.css";

function Inicio() {
  const [videos, setVideos] = useState([]); // Estado para los videos

  // Función para obtener los videos iniciales desde la API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/ThaliaOlvera/recetarioDb/videos"
        );
        const data = await response.json();
        setVideos(data); // Actualiza el estado con los videos obtenidos
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Función para agregar un nuevo video al estado
  const agregarVideo = (nuevoVideo) => {
    setVideos((prevVideos) => [...prevVideos, nuevoVideo]);
  };

  return (
    <>
      <Titulo>
        <h1>Un lugar para guardar tus recetas favoritas</h1>
      </Titulo>
      {/* Pasamos los videos y la función para agregar nuevos videos al componente Categorias */}
      <Categorias videos={videos} onAgregarVideo={agregarVideo} />
    </>
  );
}

export default Inicio;
