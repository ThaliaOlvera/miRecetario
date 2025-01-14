import styles from "./Categorias.module.css";
import Card from "../Card";

function Categorias({ videos }) {
  // Agrupar los videos por categoría
  const videosPorCategoria = videos.reduce((acc, video) => {
    acc[video.categoria] = acc[video.categoria] || [];
    acc[video.categoria].push(video);
    return acc;
  }, {});

  return (
    <section className={styles.container}>
      {Object.entries(videosPorCategoria).map(([categoria, videos]) => (
        <div key={categoria} className={styles.infoCategoria}>
          <h2 className={styles.infoCategoriaTitulo}>{categoria}</h2>
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
