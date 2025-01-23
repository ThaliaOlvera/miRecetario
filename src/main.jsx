import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AppRoutes from "./routes";
import { VideoProvider } from "./context/VideosContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoProvider>
      <AppRoutes></AppRoutes>
    </VideoProvider>
  </StrictMode>
);
