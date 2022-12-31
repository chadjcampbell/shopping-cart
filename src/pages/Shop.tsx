import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Item from "../components/Item";

type StoreItem = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export default function Shop() {
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
    <>
      <h2>Shop</h2>
      <Row className="g-3">
        {items.map((item: StoreItem) => (
          <Col key={item.id}>
            <Item {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
