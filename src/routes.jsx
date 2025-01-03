import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/index";
import Favoritos from "./pages/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
