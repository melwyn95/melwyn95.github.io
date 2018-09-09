import {combineReducers} from "redux";
import Users from "./reducer-users";
import ActiveUser from "./reducer-active-user";
import Slides from "./reducer-slides";

const allReducers = combineReducers({
  users: Users,
  activeUser: ActiveUser,
  slides: Slides
});

export default allReducers;