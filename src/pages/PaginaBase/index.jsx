import { Outlet } from "react-router-dom";
import Container from "../../componentes/Container";
import Header from "../../componentes/Header/Header";
import FavoritosProvider from "../../context/Favoritos";
import Footer from "../../componentes/Footer";

function PaginaBase() {
  return (
    <main>
      <Header />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Footer />
    </main>
  );
}

export default PaginaBase;
