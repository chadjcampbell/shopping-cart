import { Card } from "react-bootstrap";

export default function Item({ ...item }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={item.image}
        style={{ objectFit: "contain", height: "200px", width: "200px" }}
      />
    </Card>
  );
}
