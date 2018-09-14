import Events from "../tack/events";

const DropDownAction = () => {

  return {

    dropDownValueChanged: (value) => {
      return {
        type: Events.DROP_DOWN_VALUE_CHANGED,
        payload: value
      };
    }

  }

};

export default DropDownAction;