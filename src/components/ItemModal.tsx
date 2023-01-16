import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { StoreItem } from "../pages/Shop";

type modalProps = {
  item: StoreItem;
  showModal: boolean;
  setShowModal: (arg0: boolean) => void;
};

export function ItemModal({ item, showModal, setShowModal }: modalProps) {
  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{item.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
