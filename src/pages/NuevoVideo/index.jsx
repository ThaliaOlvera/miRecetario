import Formulario from "../../componentes/Formulario";
import styles from "./NuevoVideo.module.css";

const NuevoVideo = () => {
  const registrarVideo = async (nuevoVideo) => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/ThaliaOlvera/recetarioDb/videos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoVideo),
        }
      );

      if (!response.ok) {
        throw new Error("Error al guardar el video");
      }

      const videoGuardado = await response.json();
      console.log("Video guardado con éxito:", videoGuardado);
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
    }
  };

  return <Formulario registrarVideo={registrarVideo} />;
};

export default NuevoVideo;
