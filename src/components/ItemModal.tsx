import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type modalProps = {
  showModal: boolean;
  setShowModal: (argo0: boolean) => void;
};

export function ItemModal({ showModal, setShowModal }: modalProps) {
  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
