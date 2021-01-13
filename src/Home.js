import { useSelector, useDispatch } from "react-redux";
import {
  getOrdersState,
  getUserList,
  getSelectedUser,
} from "./redux/selectors";
import { selectUserId } from "./redux/actions";
import OrderDetails from "./OrderDetails";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
function PreviousOrder({ order }) {
  return <OrderDetails order={order} />;
}
/**
 * Accordion card with previous orders
 * @param {*} param0
 */
function PreviousOrderCard({ order }) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={order.id}>
          Order #{order.id}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={order.id}>
        <Card.Body>
          <PreviousOrder order={order} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
/**
 * Accordion of previous order
 * @param {*} param0
 */
function PreviousOrderAccordion({ orders }) {
  return (
    <Accordion>
      {orders.map((order) => (
        <PreviousOrderCard key={order.id} order={order} />
      ))}
    </Accordion>
  );
}
function UserList({ users = [] }) {
  const dispatch = useDispatch();
  const onClick = (userId) => {
    dispatch(selectUserId(userId));
  };
  return (
    <>
      {users.map((user) => (
        <Dropdown.Item key={user.id} onClick={() => onClick(user.id)}>
          {user.firstName} {user.lastName}
        </Dropdown.Item>
      ))}
    </>
  );
}
/**
 * Home page
 * will display previous order placed on the site and basic information
 */
function Home() {
  const { previousOrders } = useSelector(getOrdersState);
  const users = useSelector(getUserList);
  const currentUser = useSelector(getSelectedUser);
  console.log(currentUser);
  return (
    <>
      <h1>Home</h1>
      <p>
        {" "}
        This is a stand alone app that simulates placing orders to a sandwich
        shop
      </p>
      <p>
        Use the drop down to change users. Select Jason Rogers for admin actions
        such as open/close order, viewing current order, or adding new users
      </p>
      <p>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            Selected user: {currentUser.firstName} {currentUser.lastName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <UserList users={users} />
          </Dropdown.Menu>
        </Dropdown>
      </p>
      <p>
        {" "}
        Order tab will allow you so see you're previously ordered items and add
        an item to the order if an order is opened by and admin
      </p>
      <p>Below you can see the details of the previous orders</p>

      <h3>Previous Order:</h3>

      {previousOrders.length ? (
        <PreviousOrderAccordion orders={previousOrders} />
      ) : (
        <p>No current order</p>
      )}
    </>
  );
}

export default Home;
