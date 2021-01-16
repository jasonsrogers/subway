import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { getSelectedUserId } from "../redux/selectors";

/**
 * Navbar of the application
 * Contains navigation links including user switch (only for demo purpose)
 */
function AppNavbar() {
  const userId = useSelector((state) => getSelectedUserId(state));

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Subway</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href={`/order/${userId}`}>Order</Nav.Link>
          <Nav.Link href={`/user/${userId}`}>User</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
