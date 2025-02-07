import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/index";
import Favoritos from "./pages/Favoritos";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import PaginaBase from "./pages/PaginaBase";
import NuevoVideo from "./pages/NuevoVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/miRecetario" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path="nuevoVideo" element={<NuevoVideo />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
