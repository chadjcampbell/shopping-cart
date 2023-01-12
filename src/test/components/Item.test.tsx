import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Item from "../../components/Item";
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

describe("Cart item", () => {
  it("renders an item title", () => {
    render(
      <CartProvider items={testItems}>
        <Item {...testItems[0]} />
      </CartProvider>
    );
    const testTitle = screen.getByText("test");
    expect(testTitle).toBeInTheDocument();
  });
  it("renders quantity after adding to cart", async () => {
    render(
      <CartProvider items={testItems}>
        <Item {...testItems[0]} />
      </CartProvider>
    );
    const button = screen.getByRole("add-to-cart");
    userEvent.click(button);
    //TODO fix this await, needs to rerender
    const quantity = await screen.getByRole("quantity");
    expect(quantity.textContent === "0");
  });
});
