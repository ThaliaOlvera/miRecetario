import { createContext, useContext, useEffect, useState } from "react";
import {
  getVideos,
  saveVideo as addVideoService,
  deleteVideo as deleteVideoService,
  updateVideo as updateVideoService,
} from "../Services/api,";

const VideosContext = createContext();

export const useVideoContext = () => {
  return useContext(VideosContext);
};

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoData = await getVideos();
        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const addVideo = async (video) => {
    try {
      const newVideo = await addVideoService(video);
      setVideos((prevVideos) => {
        const updatedVideos = [...prevVideos, newVideo];
        return updatedVideos;
      });
    } catch (error) {
      console.error("Error al adicionar vídeo", error);
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await deleteVideoService(videoId);
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoId)
      );
    } catch (error) {
      console.error("Error al borrar video", error);
    }
  };

  const updateVideo = async (videoId, updatedVideo) => {
    try {
      const updatedData = await updateVideoService(videoId, updatedVideo);

      setVideos((prevVideos) => {
        const updatedVideos = prevVideos.map((video) =>
          video.id === videoId ? { ...video, ...updatedData } : video
        );
        return updatedVideos;
      });
    } catch (error) {
      console.error(
        "Error al actualizar el video:",
        error.response?.data || error.message
      );
    }
  };

  const videoCategory = {};

  videos.forEach((video) => {
    const category = video.categoria;
    if (!videoCategory[category]) {
      videoCategory[category] = [];
    }
    videoCategory[category].push(video);
  });

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        videoCategory,
        addVideo,
        deleteVideo,
        updateVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContext;
