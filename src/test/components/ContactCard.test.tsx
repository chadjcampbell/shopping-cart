import { render, screen } from "@testing-library/react";
import { ContactCard } from "../../components/ContactCard";

beforeEach(() => {
  const contact = render(<ContactCard />);
});

describe("Contact card", () => {
  it("displays phone number", () => {
    const phone = screen.getByRole("phone-number");
    expect(phone).toBeInTheDocument();
  });
  it("displays email", () => {
    const email = screen.getByRole("e-mail");
    expect(email).toBeInTheDocument();
  });
  it("displays address", () => {
    const address = screen.getByRole("address");
    expect(address).toBeInTheDocument();
  });
});
