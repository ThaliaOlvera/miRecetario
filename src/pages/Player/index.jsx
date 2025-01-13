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
      `https://my-json-server.typicode.com/ThaliaOlvera/recetarioDb/videos?id=${parametros.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data);
      });
  }, []);

  if (!video) return <NotFound />;

  return (
    <>
      <Titulo>
        <h1> {video.titulo} </h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
