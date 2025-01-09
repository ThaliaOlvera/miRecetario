import { useParams } from "react-router-dom";
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import styles from "./Player.module.css";
import videos from "../../data/db.json";
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
  //const video = videos.find((video) => video.id === Number(parametros.id));
  console.log(video);

  if (!video) return <NotFound />;

  return (
    <>
      <Banner img="home" color="#58b9ae" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
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
