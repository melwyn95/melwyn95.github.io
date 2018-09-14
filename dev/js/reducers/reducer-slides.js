import Events from "../tack/events";
import UUID from "uuid";

function generateSlides(iNumberOfSlides) {
  let aNewSlides = [];

  for (let i=0;i<iNumberOfSlides;i++) {
    aNewSlides.push({
      id: UUID(),
      data: i + 1
    });
  }

  return aNewSlides;
}

export default function (state = null, action) {
  if (!state) {
    return [{
      id: UUID(),
      data: 1
    }];
  }

  switch (action.type) {
    case Events.DROP_DOWN_VALUE_CHANGED:
      return generateSlides(action.payload);
    case Events.PREVIOUS_STATE_CLICKED:
      return generateSlides(action.payload.value);
  }

  return state;
};