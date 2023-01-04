import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";
import { useCart } from "../context/CartContext";

export type StoreItem = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export default function Shop() {
  const { items } = useCart();
  if (items.length) {
    return (
      <>
        <h2>Shop</h2>
        <Row className="g-3" xs={1} md={2} lg={3}>
          {items.map((item: StoreItem) => (
            <Col key={item.id}>
              <Item {...item} />
            </Col>
          ))}
        </Row>
      </>
    );
  } else {
    return (
      <Container className="d-flex justify-content-center mt-4">
        <h2>Loading...</h2>
      </Container>
    );
  }
}
