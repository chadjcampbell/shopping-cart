import { Button, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem, items } = useCart();
  const item = items.find((item) => item.id === id);

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.image}
        style={{ width: "75px", height: "75px", objectFit: "contain" }}
      />
      <div className="me-auto overflow-hidden">
        <div>
          {item?.title}
          {quantity > 1 && <span className="text-muted">x{quantity}</span>}
        </div>
        <div className="text-muted">
          {item && formatCurrency(parseFloat(item.price))}
        </div>
      </div>
      <div>{item && formatCurrency(parseFloat(item.price) * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItem(item!.id)}
      >
        x
      </Button>
    </Stack>
  );
}
