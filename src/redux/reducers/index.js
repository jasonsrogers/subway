import { combineReducers } from "redux";
import users from "./users";
import orders from "./orders";

export default combineReducers({ users, orders });
