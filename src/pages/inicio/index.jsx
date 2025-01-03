import Header from "componentes/Header/Header.jsx";
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import styles from "./index.module.css";
import videos from "../../data/db.json";
import Footer from "../../componentes/Footer";

function Inicio() {
  return (
    <>
      <Header />
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar tus recetas favoritas</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
      <Footer />
    </>
  );
}

export default Inicio;
