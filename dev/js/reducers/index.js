import {combineReducers} from "redux";
import Slides from "./reducer-slides";
import DropDown from "./reducer-dropdown";
import FinishButton from "./reducer-finish-button";
import LoginStatus from "./reducer-login";

const allReducers = combineReducers({
  slides: Slides,
  dropDown: DropDown,
  finishButton: FinishButton,
  loginStatus: LoginStatus
});

export default allReducers;