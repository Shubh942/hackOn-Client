import { Container, Nav, Navbar } from "react-bootstrap/";
import delta from "../../assets/Delta.png";

const HeaderNav = () => {
  return (
    <>
      <Navbar className="headerNav pt-4 " expand="lg">
        <Container fluid className="d-flex justify-content-center">
          <Navbar.Brand href="/" className="deltaLogo">
            <img className="navLogo" src={delta} alt="Delta logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
