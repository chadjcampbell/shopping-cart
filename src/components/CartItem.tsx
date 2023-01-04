import { Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";

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
        style={{ width: "125px", height: "75px", objectFit: "fill" }}
      />
    </Stack>
  );
}
