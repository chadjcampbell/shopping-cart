import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartItem } from "../../components/CartItem";
import { CartProvider } from "../../context/CartContext";

const testItem = { id: 1, quantity: 1 };
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

describe("Cart item", () => {
  it("renders an item title", () => {
    const testCartItem = render(
      <CartProvider items={testItems}>
        <CartItem {...testItem} />
      </CartProvider>
    );
    const testTitle = screen.getByText("test");
    expect(testTitle).toBeInTheDocument();
  });
  it("is removed after clicking remove", () => {
    const testCartItem = render(
      <CartProvider items={testItems}>
        <CartItem {...testItem} />
      </CartProvider>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(testCartItem === null);
  });
});
