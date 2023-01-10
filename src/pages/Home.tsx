import { Container, Nav, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container className="overflow-hidden">
      <Stack gap={3} className="col-md-5 mx-auto">
        <h3 className="mt-5 mx-auto">Welcome to</h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mx-auto" style={{ fontSize: "5rem" }}>
            <span style={{ color: "rgb(204, 0, 82)" }}>Sweet</span> Deals
          </h1>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 200 }}
            transition={{ duration: 1 }}
          >
            <LinkContainer className="align-items-end" to="/shop">
              <Nav.Link className="fs-3">Shop Now &#187;</Nav.Link>
            </LinkContainer>
          </motion.div>
        </motion.div>
      </Stack>
    </Container>
  );
}
