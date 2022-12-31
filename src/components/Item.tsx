import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export default function Item({ ...item }) {
  let quantity = 1;
  return (
    <Card className="d-flex align-items-center justify-content-center h-100">
      <Card.Img
        variant="top"
        src={item.image}
        style={{
          objectFit: "contain",
          height: "200px",
          width: "200px",
          padding: "10px",
        }}
      />
      <Card.Body className="d-flex flex-column w-100">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{item.title}</span>
          <span className="ms-2 text-muted">{formatCurrency(item.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div className="fs-3">{quantity}</div>
                <Button>+</Button>
              </div>
              <Button className="btn-danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
