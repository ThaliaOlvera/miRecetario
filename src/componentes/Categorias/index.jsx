import styles from "./Categorias.module.css";
import Card from "../Card";
import { useVideoContext } from "../../context/VideosContext";

const CategoryVideos = () => {
  const { videoCategory } = useVideoContext();
  console.log("Categorías de videos:", videoCategory);

  return (
    <section className={styles.container}>
      {Object.keys(videoCategory).map((category) => (
        <div key={category} className={styles.infoCategoria}>
          <h2 className={styles.infoCategoriaTitulo}>{category}</h2>
          <div className={styles.inforCard}>
            {videoCategory[category].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryVideos;
