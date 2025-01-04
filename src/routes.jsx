import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/index";
import Favoritos from "./pages/Favoritos";
import Header from "componentes/Header/Header.jsx";
import Footer from "./componentes/Footer";
import Container from "./componentes/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
