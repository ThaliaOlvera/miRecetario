import { useEffect, useState } from "react";
import styles from "./Categorias.module.css";
import Card from "../Card";

function Categorias() {
  const [videosPorCategoria, setVideosPorCategoria] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/ThaliaOlvera/recetarioDb/videos"
        );
        const videos = await response.json();

        const agrupados = videos.reduce((acc, video) => {
          acc[video.categoria] = acc[video.categoria] || [];
          acc[video.categoria].push(video);
          return acc;
        }, {});
        setVideosPorCategoria(agrupados);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className={styles.container}>
      {Object.entries(videosPorCategoria).map(([categoria, videos]) => (
        <div key={categoria} className={styles.infoCategoria}>
          <h2>{categoria}</h2>
          <div className={styles.inforCard}>
            {videos.map((video) => (
              <Card key={video.id} {...video} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Categorias;
