import React from "react";

import Paper from "@material-ui/core/Paper";

import Slider from "../components/carousel/slider";
import DropDown from "../components/dropdown";
import FinishButton from "../components/finish-button";
import HistoryDialogView from "../components/history-dialog-view";

const oStyle = {
  margin: "5px 5px 10px 5px"
};

const AppContainer = () => (
  <div>
    <Paper square={true} elevation={2} style={oStyle}>
      <DropDown/>
    </Paper>
    <Paper square={true} elevation={2} style={oStyle}>
      <Slider />
    </Paper>
    <FinishButton/>
    <HistoryDialogView />
  </div>
);

export default AppContainer;