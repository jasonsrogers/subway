import {
  ADD_USER,
  OPEN_NEW_ORDER,
  CLOSE_ORDER,
  ADD_ITEM_TO_ORDER,
  REMOVE_ITEM_FROM_ORDER,
  SELECT_USER_ID,
  RESET_STATE,
} from "./actionTypes";

export const addUser = (content) => ({
  type: ADD_USER,
  payload: {
    id: new Date().getTime(),
    content,
  },
});
export const selectUserId = (userId) => ({
  type: SELECT_USER_ID,
  payload: {
    userId,
  },
});

export const openNewOrder = () => {
  return {
    type: OPEN_NEW_ORDER,
    payload: {
      id: new Date().getTime(),
    },
  };
};
export const closeOrder = () => ({
  type: CLOSE_ORDER,
  payload: {},
});

export const addItemToOrder = (content) => ({
  type: ADD_ITEM_TO_ORDER,
  payload: {
    content: { ...content, id: new Date().getTime() },
  },
});
export const removeItemFromOrder = (content) => ({
  type: REMOVE_ITEM_FROM_ORDER,
  payload: {
    content,
  },
});

export const resetState = () => ({
  type: RESET_STATE,
});
