import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { CartProvider } from "./context/CartContext";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="min-vh-100">
      <CartProvider items={items}>
        <Navbar />
        <Container className="mb-4 h-auto">
          <Outlet />
        </Container>
        <Footer />
      </CartProvider>
    </div>
  );
}
