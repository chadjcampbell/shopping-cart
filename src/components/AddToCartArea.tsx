import { Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function AddToCartArea({ ...item }) {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeItem } =
    useCart();
  const quantity = getQuantity(item.id);
  return (
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
  );
}

export default AddToCartArea;
