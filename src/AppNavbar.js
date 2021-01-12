import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { getUserList, getSelectedUserId } from "./redux/selectors";
import { selectUserId } from "./redux/actions";
import { navigate } from "@reach/router";

function UserList({ users = [] }) {
  const dispatch = useDispatch();
  const onClick = (userId) => {
    dispatch(selectUserId(userId));
    navigate(`/user/${userId}`);
  };
  return (
    <nav>
      {users.map((user) => (
        <div key={user.id}>
          <NavDropdown.Item key={user.id} onClick={() => onClick(user.id)}>
            {user.firstName} {user.lastName}
          </NavDropdown.Item>
        </div>
      ))}
    </nav>
  );
}

function AppNavbar() {
  const userId = useSelector((state) => getSelectedUserId(state));
  const users = useSelector(getUserList);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Subway</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href={`/order/${userId}`}>Order</Nav.Link>
          <NavDropdown title="Users" id="basic-nav-dropdown">
            <UserList users={users} />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
