import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserById,
  getOrdersState,
  getUsersPreviousOrders,
} from "./redux/selectors";
import { selectUserId } from "./redux/actions";
import OrderDetails from "./OrderDetails";
import Admin from "./Admin";
import PreviousOrders from "./PreviousOrders";

function UserPage({ userId }) {
  const user = useSelector((state) => getUserById(state, userId));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectUserId(userId));
  }, [dispatch, userId]);
  const { currentOrder } = useSelector(getOrdersState);
  const isAdmin = user?.isAdmin;
  const previousOrders = useSelector((state) =>
    getUsersPreviousOrders(state, userId)
  );

  if (!userId) {
    return <>Missing userId</>;
  }

  return (
    <>
      <h3>Your current order:</h3>
      {currentOrder ? (
        <OrderDetails order={currentOrder} />
      ) : (
        <p>No current order</p>
      )}
      <PreviousOrders orders={previousOrders} />
      {isAdmin ? <Admin userId={userId} /> : null}
    </>
  );
}

export default UserPage;
