import { motion } from "framer-motion";
import { Card, Container, Row, Col } from "react-bootstrap";
import { ContactCard } from "../components/ContactCard";

export default function Contact() {
  return (
    <Container>
      <h2 className="text-center mt-3">Contact Us</h2>
      <Container>
        <Row xs={1} md={2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Col className="mt-3 shadow">
              <Card className="mx-auto">
                <ContactCard />
              </Card>
            </Col>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Col className="mt-3 shadow">
              <Card className="mx-auto">
                <img src="../public/fakemap.jpg" />
              </Card>
            </Col>
          </motion.div>
        </Row>
      </Container>
    </Container>
  );
}
