import { ADD_USER } from "../actionTypes";

const user1 = {
  id: 1,
  firstName: "Jason",
  lastName: "Rogers",
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
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { id, content } = action.payload;
      return {
        ...state,
        allUsers: [...state.allUsers, content],
        usersByIds: {
          ...state.usersByIds,
          [id]: {
            content,
          },
        },
      };
    }
    default:
      return state;
  }
}
