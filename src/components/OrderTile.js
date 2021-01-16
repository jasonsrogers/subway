import { useDispatch } from "react-redux";
import { addItemToOrder } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import styled from "styled-components";

// These would normally be calls to db that are loaded into redux and accessed via selectors
import {
  getBreadType,
  getTasteType,
  getToppingsType,
  getVegetables,
  getLabelForKey,
} from "./constants";

const OrderTileWrapper = styled.div`
  margin-right: 10px;
`;
/**
 * Show sandwich details breakdown
 * @param {*} param0
 */
function OrderTile({ order, canOrderAgain = false }) {
  const dispatch = useDispatch();
  const orderAgain = () => {
    dispatch(addItemToOrder(order));
  };
  return (
    <OrderTileWrapper>
      <Card style={{ width: "300px" }}>
        <Card.Body>
          <Card.Title>Order:</Card.Title>
          <p>Bread: {getLabelForKey(getBreadType(), order.breadType)}</p>

          <p>Size: {order.size === "short" ? "Short (15cm)" : "Long (30cm)"}</p>
          {order.ovenBacked ? <p>Oven backed</p> : null}
          <p>Taste: {getLabelForKey(getTasteType(), order.taste)}</p>
          <p>
            Toppings:{" "}
            {order.toppings
              .map((topping) => getLabelForKey(getToppingsType(), topping))
              .join(", ")}
          </p>
          <p>
            Vegetables:{" "}
            {order.vegetables
              .map((veg) => getLabelForKey(getVegetables(), veg))
              .join(", ")}
          </p>
          {/* <p>Sauce:{getLabelForKey(getSauce(), order.sauce)}</p> */}

          {canOrderAgain ? (
            <Button onClick={orderAgain}>Order again</Button>
          ) : null}
        </Card.Body>
      </Card>
    </OrderTileWrapper>
  );
}
export default OrderTile;
