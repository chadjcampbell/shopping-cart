import { Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem } = useCart();

  return <Stack>Hi</Stack>;
}
