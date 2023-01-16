import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";
import { ItemModal } from "../components/ItemModal";
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
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<StoreItem>();
  const handleOpen = (id: number) => {
    const itemInfo = items.find((item) => item.id === id);
    setModalData(itemInfo);
    setShowModal(true);
  };
  let modal;
  showModal
    ? (modal = (
        <ItemModal
          item={modalData}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ))
    : (modal = <></>);

  if (items.length) {
    return (
      <Container className="pb-5">
        {modal}
        <h2>Shop</h2>
        <Row className="g-3" xs={1} md={2} lg={3}>
          {items.map((item: StoreItem) => (
            <Col key={item.id}>
              <Item {...item} handleOpen={handleOpen} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="d-flex justify-content-center mt-4">
        <h2>Loading...</h2>
      </Container>
    );
  }
}
