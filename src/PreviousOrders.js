import styled from "styled-components";
import OrderTile from "./OrderTile";

const H3 = styled.h3`
  margin-top: 10px;
`;

const OrderTileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function PreviousOrders({ orders = [], canOrder }) {
  if (orders.length === 0) {
    return (
      <>
        <H3>Previous Orders:</H3>
        <p>No previous orders</p>
      </>
    );
  }
  return (
    <>
      <H3>Previous Orders:</H3>
      <OrderTileContainer>
        {orders.map((order) => (
          <OrderTile key={order.id} order={order} canOrderAgain={canOrder} />
        ))}
      </OrderTileContainer>
    </>
  );
}
export default PreviousOrders;
