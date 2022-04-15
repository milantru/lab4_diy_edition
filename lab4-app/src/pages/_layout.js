import { Outlet, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

export default function Layout() {
  return (
    <Container>
      <Row className="mb-2">
        <Nav>
          <NavItem>
            <Link to="/" className="p-1 text-decoration-none">Page1</Link>
          </NavItem>
          <NavItem>
            <Link to="/page2" className="p-1 text-decoration-none">Page2</Link>
          </NavItem>
          <NavItem>
            <Link to="/page3" className="p-1 text-decoration-none">Page3</Link>
          </NavItem>
          <NavItem>
            <Link to="/page4" className="p-1 text-decoration-none">Page4</Link>
          </NavItem>
        </Nav>
      </Row>

      <Row>
        <Outlet />
      </Row>
    </Container>
  )
};
