import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { StoreItem } from "../pages/Shop";

export default function Item({ ...item }: StoreItem) {
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
          <span className="ms-2 text-muted">
            {formatCurrency(parseInt(item.price))}
          </span>
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
                <Button
                  variant="outline-primary"
                  className="rounded-circle"
                  style={{ width: "35px", height: "35px" }}
                >
                  <strong>-</strong>
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  variant="outline-primary"
                  className="rounded-circle"
                  style={{ width: "35px", height: "35px" }}
                >
                  <strong>+</strong>
                </Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
