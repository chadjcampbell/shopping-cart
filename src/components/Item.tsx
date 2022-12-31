import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export default function Item({ ...item }) {
  let quantity = 0;
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
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{item.title}</span>
          <span className="ms-2 text-muted">{formatCurrency(item.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to Cart</Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}
