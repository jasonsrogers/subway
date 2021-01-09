import {
  ADD_USER,
  OPEN_NEW_ORDER,
  CLOSE_ORDER,
  ADD_ITEM_TO_ORDER,
  REMOVE_ITEM_FROM_ORDER,
} from "./actionTypes";

let nextUserId = 0;
let nextOrderId = 0;

export const addUser = (content) => ({
  type: ADD_USER,
  payload: {
    id: ++nextUserId,
    content,
  },
});

export const openNewOrder = () => ({
  type: OPEN_NEW_ORDER,
  payload: {
    id: ++nextOrderId,
  },
});
export const closeOrder = () => ({
  type: CLOSE_ORDER,
  payload: {},
});

export const addItemToOrder = (content) => ({
  type: ADD_ITEM_TO_ORDER,
  payload: {
    content,
  },
});
export const removeItemFromOrder = (content) => ({
  type: REMOVE_ITEM_FROM_ORDER,
  payload: {
    content,
  },
});
