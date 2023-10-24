import { Container, Nav, Navbar } from "react-bootstrap/";
import * as ROUTES from "../../../constants/routes";
import delta from "../../../../public/images/misc/deltalogo.png";

function HeaderNav() {
  return (
    <>
      <Navbar className="headerNav pt-4 " expand="lg">
        <Container fluid className="d-flex justify-content-center">
          <Navbar.Brand href={ROUTES.HOME} className="amazonlogo">
            <img className="navLogo" src={delta} alt="Delta logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
