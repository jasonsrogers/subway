import { useSelector } from "react-redux";
import { getOrdersState } from "./redux/selectors";
import OrderDetails from "./OrderDetails";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";
function PreviousOrder({ order }) {
  return (
    <>
      <OrderDetails order={order} />
    </>
  );
}
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

function PreviousOrderAccordion({ orders }) {
  return (
    <Accordion>
      {orders.map((order) => (
        <PreviousOrderCard key={order.id} order={order} />
      ))}
    </Accordion>
  );
}

function Home() {
  const { previousOrders } = useSelector(getOrdersState);
  return (
    <>
      <h1>Home</h1>
      <p>
        {" "}
        This is a stand alone app that simulates placing orders to a sandwich
        shop
      </p>
      <p> Use the drop down in the nav bar to change users</p>
      <p>
        {" "}
        Select Jason Rogers for admin actions such as open/close order, viewing
        current order, or adding new users
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
