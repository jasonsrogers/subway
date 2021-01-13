import { ADD_USER, SELECT_USER_ID, RESET_STATE } from "../actionTypes";

const user1 = {
  id: 1,
  firstName: "Sandwich",
  lastName: "Admin",
  isAdmin: true,
};

const user2 = {
  id: 2,
  firstName: "Frodo",
  lastName: "Baggins",
  isAdmin: false,
};

const initialState = {
  allUsers: [user1, user2],
  usersByIds: {
    1: user1,
    2: user2,
  },
  selectedUserId: user1.id,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { id, content } = action.payload;
      return {
        ...state,
        allUsers: [...state.allUsers, { id, ...content }],
        usersByIds: {
          ...state.usersByIds,
          [id]: {
            ...content,
          },
        },
      };
    }
    case SELECT_USER_ID:
      return {
        ...state,
        selectedUserId: action.payload.userId,
      };
    case RESET_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
