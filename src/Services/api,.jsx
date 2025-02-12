import axios from "axios";

const api = axios.create({
  baseURL: "https://678d9465f067bf9e24ea9a5a.mockapi.io/",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/videos");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los videos:", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await api.post("/videos", video);
    return response.data;
  } catch (error) {
    console.error("Error al crear el video:", error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el video:", error);
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  console.log("Actualizando video con ID:", videoId, updatedVideo);
  try {
    const response = await api.put(`/videos/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el video:", error);
    throw error;
  }
};

export default api;
