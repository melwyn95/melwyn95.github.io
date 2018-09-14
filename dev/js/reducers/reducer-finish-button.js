import Events from "../tack/events";

export default function (state = null, action) {

  if (!state) {
    return {
      isDialogOpen: false
    };
  }

  switch (action.type) {
    case Events.FINISH_BUTTON_CLICKED:
      return {
        isDialogOpen: true
      };
    case Events.PREVIOUS_STATE_CLICKED:
    case Events.HISTORY_DIALOG_VIEW_CLOSED:
      return {
        isDialogOpen: false
      }
  }

  return state;
}