import { Card } from "react-bootstrap";

export default function Item({ ...item }) {
  return (
    <Card className="d-flex align-items-center justify-content-center">
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
          <span className="ms-2 text-muted">{item.price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
