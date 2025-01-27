import { useParams } from "react-router-dom";
import Titulo from "../../componentes/Titulo";
import styles from "./Player.module.css";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://678d9465f067bf9e24ea9a5a.mockapi.io/videos?id=${parametros.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
        setVideo(null);
      });
  }, [parametros.id]);

  if (!video) return <NotFound />;

  const videoLink =
    video.link && typeof video.link === "string" ? video.link : null;

  return (
    <>
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        {videoLink ? (
          <iframe
            src={videoLink}
            title={video.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <p>El enlace del video no está disponible.</p>
        )}
      </section>
    </>
  );
}

export default Player;
