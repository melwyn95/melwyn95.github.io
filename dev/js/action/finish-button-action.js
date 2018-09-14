import Events from "../tack/events";

const FinishButtonAction = () => {

  return {

    finishButtonClicked: () => {
      return {
        type: Events.FINISH_BUTTON_CLICKED
      };
    },

    historyDialogViewClosed: () => {
      return {
        type: Events.HISTORY_DIALOG_VIEW_CLOSED
      };
    },

    previousStateClicked: (iSlides) => {
      return {
        type: Events.PREVIOUS_STATE_CLICKED,
        payload: iSlides
      }
    }

  }

};

export default FinishButtonAction;