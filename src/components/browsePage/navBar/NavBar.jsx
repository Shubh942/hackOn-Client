/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FirebaseContext } from "../../../context/firebase";
import { useMatchMedia } from "../../../helpers/useMatchMedia";
import SearchForm from "../../Forms/SearchForm";
import "./navBar.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NavBar({ user, setProfile, searchTerm, setSearchTerm }) {
  const [show, handleShow] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const isTabletDesktopResolution = useMatchMedia("(min-width:601px), true");

  const transitionNavBar = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const Navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`nav ${show && "navBlack"}`}>
        <Container fluid className="py-0 px-3">
          <Navbar.Brand className="amazonlogo" to="/">
            {isTabletDesktopResolution ? (
              <img
                className="navLogo"
                src="/images/misc/deltalogo.png"
                alt="Delta logo"
              />
            ) : (
              <img
                className="navMobileLogo"
                src="/images/misc/deltalogo.png"
                alt="Delta Mobile logo"
              />
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand-lg"
                className="d-flex align-items-center"
              >
                <img
                  className="avatar me-3"
                  src={`/images/users/${user?.photoURL}.png`}
                  alt="teal delta avatar icon"
                />
                <p className="displayName m-0">{user.displayName}</p>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="align-items-center">
              <Nav className="me-auto d-flex flex-row">
                <Link to="/browse" className="me-4">
                  Home
                </Link>
                <Link to="/watchlist" className="me-4">
                  My WatchList
                </Link>
                <Link to="/stream" className="me-4">
                  Stream
                </Link>
                <Link to="/cart" className="me-4">
                  Cart
                </Link>
                {/* <Nav.Link href="#">My List</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Tv Shows</Nav.Link> */}
              </Nav>
              <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Dropdown>
                <Dropdown.Toggle>
                  <BsThreeDots />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    onClick={() => {
                      Navigate("/");
                      firebase.auth().signOut();
                    }}
                  >
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
