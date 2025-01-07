import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/index";
import Favoritos from "./pages/Favoritos";
import Header from "componentes/Header/Header.jsx";
import Footer from "./componentes/Footer";
import Container from "./componentes/Container";
import FavoritosProvider from "./context/Favoritos";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/:id" element={<Player />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
