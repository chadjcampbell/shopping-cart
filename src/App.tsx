import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </CartProvider>
  );
}
