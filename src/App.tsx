import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { CartProvider } from "./context/CartContext";
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
    console.log(items);
  }, []);

  return (
    <CartProvider items={items}>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </CartProvider>
  );
}
