import styled from "styled-components";
import OrderTile from "./OrderTile";

const OrderTileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
/**
 * Display the details of an order by showing list of order items
 * @param {*} param0
 */
function OrderDetails({ order }) {
  const orders = order?.items ? Object.entries(order.items) : [];

  return (
    <>
      <p>Order #{order?.id}</p>
      <OrderTileContainer>
        {orders.length === 0 ? <p>No order item yet</p> : null}
        {orders.map(([userId, order]) => (
          <OrderTile key={userId} order={order} canOrderAgain={false} />
        ))}
      </OrderTileContainer>
    </>
  );
}

export default OrderDetails;
