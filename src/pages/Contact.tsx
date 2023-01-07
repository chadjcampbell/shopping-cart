import { Card, Container, Row, Col } from "react-bootstrap";
import { ContactCard } from "../components/ContactCard";

export default function Contact() {
  return (
    <Container>
      <h2 className="text-center mt-3">Contact Us</h2>
      <Container>
        <Row xs={1} md={2}>
          <Col className="mt-3">
            <Card className="mx-auto">
              <ContactCard />
            </Card>
          </Col>
          <Col className="mt-3">
            <Card className="mx-auto">
              <img src="../public/fakemap.jpg" />
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
