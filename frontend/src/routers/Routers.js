import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import ProductScreen from "../pages/ProductScreen/ProductScreen";
import CartScreen from "../pages/CartScreen/CartScreen";

function Routers() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Routers;
