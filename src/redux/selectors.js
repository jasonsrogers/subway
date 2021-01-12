import { isDebuggerStatement } from "typescript";

export const getUsersState = (store) => store.users;

export const getUserList = (store) =>
  getUsersState(store) ? getUsersState(store).allUsers : [];

export const getUserById = (store, id) =>
  getUsersState(store) ? { ...getUsersState(store).usersByIds[id], id } : {};

export const getSelectedUserId = (store) =>
  getUsersState(store) ? getUsersState(store).selectedUserId : {};

export const getOrdersState = (store) => store.orders;

export const getOrdersList = (store) =>
  getOrdersState(store) ? getOrdersState(store).previousOrders : [];

export const getUsersPreviousOrders = (store, userId) => {
  const state = getOrdersState(store);
  if (state?.previousOrders) {
    const res = [];
    state.previousOrders.forEach((order) => {
      const orderItem = order.items[userId];
      if (orderItem?.userId === userId) {
        res.push(orderItem);
      }
    });
    return res;
  } else {
    return [];
  }
};
