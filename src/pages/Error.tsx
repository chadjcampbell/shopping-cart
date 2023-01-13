import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useRouteError } from "react-router-dom";
import { Navbar as NavbarBS } from "react-bootstrap";
import { motion } from "framer-motion";

type errorData = {
  data: string;
  error: boolean;
  status: number;
  statusText: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as errorData;
  console.error(error);
  return (
    <Container fluid className="text-center mt-3">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <LinkContainer
            className="btn px-4"
            to="/home"
            style={{ backgroundColor: "rgb(255, 153, 255)" }}
          >
            <NavbarBS.Brand>
              Return to <span style={{ color: "rgb(204, 0, 82)" }}>Sweet</span>{" "}
              Dealz
            </NavbarBS.Brand>
          </LinkContainer>
        </motion.div>
      </div>
    </Container>
  );
}
