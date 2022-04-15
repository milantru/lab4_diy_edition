import { Outlet } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Navigation from "../components/Navigation";

export default function Layout() {
  return (
    <Container>
      <Row className="mb-2">
        <Navigation />
      </Row>

      <Row>
        <Outlet />
      </Row>
    </Container>
  )
};
