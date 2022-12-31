import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </>
  );
}
