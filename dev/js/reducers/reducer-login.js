import Events from "../tack/events";
import alertify from "alertifyjs";

export default function (state = null, action) {
  if (!state) {
    return {
      isUserLoggedIn: false
    }
  }

  switch (action.type) {
    case Events.LOGIN_BUTTON_CLICKED:
      let oLoginInfo = action.payload;
      let bIsUserLoggedIn = false;

      if (oLoginInfo.userName === "shaadi" && oLoginInfo.password === "123") {
        bIsUserLoggedIn = true;
      }

      if (!bIsUserLoggedIn) {
        alertify.error("Invalid Username or Password");
      }

      return {
        isUserLoggedIn: bIsUserLoggedIn
      }
  }

  return state
}