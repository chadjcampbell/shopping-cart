import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { StoreItem } from "../pages/Shop";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Item({ handleOpen, ...item }: StoreItem) {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeItem } =
    useCart();
  const quantity = getQuantity(item.id);
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
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                role="add-to-cart"
                className="w-100"
                onClick={() => increaseQuantity(item.id)}
              >
                + Add to Cart
              </Button>
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
                    onClick={() => decreaseQuantity(item.id)}
                    variant="outline-primary"
                    className="rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <strong>-</strong>
                  </Button>
                  <div role="quantity">
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseQuantity(item.id)}
                    variant="outline-primary"
                    className="rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <strong>+</strong>
                  </Button>
                </div>
                <Button
                  onClick={() => removeItem(item.id)}
                  variant="danger"
                  size="sm"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
