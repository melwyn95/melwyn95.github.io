import UUID from "uuid";
import Events from "../tack/events";

export default function (state = null, action) {
  if (!state) {
    let aDropDownItems = [];
    let iNumberOfSlides = 20;
    for (let i=0;i<iNumberOfSlides;i++) {
      aDropDownItems.push({
        id: UUID(),
        data: i + 1
      });
    }

    return {
      previousStates: [1],
      selectedItem: 1,
      dropDownItems: aDropDownItems
    };
  }

  let oNewState = {
    dropDownItems: state.dropDownItems
  };

  switch (action.type) {
    case Events.DROP_DOWN_VALUE_CHANGED:
      oNewState.selectedItem = action.payload;
      oNewState.previousStates = state.previousStates.concat([action.payload]);
      return oNewState;
    case Events.PREVIOUS_STATE_CLICKED:
      let oPreviousState = action.payload;
      oNewState.selectedItem = oPreviousState.value;
      oNewState.previousStates = state.previousStates.filter((val, index) => {return index <= oPreviousState.index});
      return oNewState;
  }

  return state;

};