import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { StoreItem } from "../pages/Shop";
import AddToCartArea from "./AddToCartArea";

type ModalProps = {
  item: StoreItem | undefined;
  showModal: boolean;
  setShowModal: (arg0: boolean) => void;
};

export function ItemModal({ item, showModal, setShowModal }: ModalProps) {
  const handleClose = () => setShowModal(false);

  return item ? (
    <Modal size="lg" centered show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          {" "}
          <Container fluid className="text-center mt-3">
            <Image
              fluid={true}
              src={item.image}
              style={{
                objectFit: "contain",
                height: "300px",
                width: "300px",
                padding: "10px",
              }}
            />
            <AddToCartArea {...item} />
          </Container>
          <div>{item.description}</div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <></>
  );
}
