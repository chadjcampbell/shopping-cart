import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { StoreItem } from "../pages/Shop";
import { motion } from "framer-motion";
import AddToCartArea from "./AddToCartArea";

export default function Item({ handleOpen, ...item }: StoreItem) {
  return (
    <motion.div
      initial={{ opacity: 0.7, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow d-flex align-items-center justify-content-center h-100">
        <Card.Header className="w-100 text-end" as="h5">
          <Button variant="info" onClick={() => handleOpen(item.id)}>
            More Info
          </Button>
        </Card.Header>
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
              {formatCurrency(parseFloat(item.price))}
            </span>
          </Card.Title>
          <AddToCartArea {...item} />
        </Card.Body>
      </Card>
    </motion.div>
  );
}
