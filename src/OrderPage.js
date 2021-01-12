import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserById,
  getUsersPreviousOrders,
  getOrdersState,
} from "./redux/selectors";
import { selectUserId } from "./redux/actions";
import OrderForm from "./OrderForm";
import PreviousOrders from "./PreviousOrders";

/**
 * Display the order page
 * - Order form
 * - Previous order of user
 * @param {*} param0
 */
function OrderPage({ userId }) {
  const user = useSelector((state) => getUserById(state, userId));
  const previousOrders = useSelector((state) =>
    getUsersPreviousOrders(state, userId)
  );
  const { canOrder } = useSelector(getOrdersState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectUserId(userId));
  }, [dispatch, userId]);

  if (!userId) {
    return <>Missing userId</>;
  }

  return (
    <>
      <OrderForm userId={user.id} />
      <PreviousOrders orders={previousOrders} canOrder={canOrder} />
    </>
  );
}
export default OrderPage;
