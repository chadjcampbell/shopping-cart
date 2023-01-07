import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as NavbarBS, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartQuantity, openCart } = useCart();
  return (
    <NavbarBS sticky="top" bg="light" variant="light">
      <Container className="me-auto">
        <LinkContainer to="/home">
          <NavbarBS.Brand>
            <span style={{ color: "pink" }}>Sweet</span> Dealz
          </NavbarBS.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/shop">
            <Nav.Link>Shop</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
      <Button
        onClick={openCart}
        style={{ width: "3rem", height: "3rem", position: "relative" }}
        className="rounded-circle me-3"
        variant="outline-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%,25%)",
          }}
        >
          {cartQuantity}
        </div>
      </Button>
    </NavbarBS>
  );
}
