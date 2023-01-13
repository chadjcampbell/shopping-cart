import { render, screen } from "@testing-library/react";
import { ShoppingCart } from "../../components/ShoppingCart";
import { CartProvider } from "../../context/CartContext";

const testItems = [
  {
    id: 1,
    title: "test",
    price: "test",
    category: "test",
    description: "test",
    image: "test",
  },
];

describe("Shopping cart", () => {
  it("opens", () => {
    render(
      <CartProvider items={testItems}>
        <ShoppingCart isOpen={true} />
      </CartProvider>
    );
    const title = screen.getByText("Cart");
    expect(title).toBeInTheDocument();
  });
  it("closes", () => {
    render(
      <CartProvider items={testItems}>
        <ShoppingCart isOpen={false} />
      </CartProvider>
    );
    const title = screen.queryByText("Cart");
    expect(title).not.toBeInTheDocument();
  });
});
