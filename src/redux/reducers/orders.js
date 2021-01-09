import { OPEN_NEW_ORDER, CLOSE_ORDER, ADD_ITEM_TO_ORDER } from "../actionTypes";

const initialState = {
  previousOrders: [],
  currentOrder: undefined,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_NEW_ORDER: {
      const { id } = action.payload;
      return {
        ...state,
        canOrder: true,
        currentOrder: {
          id,
          items: [],
        },
      };
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        canOrder: false,
        currentOrder: undefined,
        previousOrders: [...state.previousOrders, state.currentOrder],
      };
    }

    case ADD_ITEM_TO_ORDER: {
      const { content } = action.payload;
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          items: [...state.currentOrder.items, content],
        },
      };
    }
    default:
      return state;
  }
}
