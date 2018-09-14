import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import FinishButtonAction from "../action/finish-button-action";

class HistoryDialogView extends Component {

  handlePreviousStateClicked (previousState, index) {
    let oPreviousState = {
      value: previousState,
      index: index
    };
    this.props.previousStateClicked(oPreviousState);
  }

  getListItems (bIsDialogOpen) {
    if (!bIsDialogOpen) return null;
    return this.props.dropDown.previousStates.map((previousState, index) => (
      <ListItem button onClick={this.handlePreviousStateClicked.bind(this, previousState, index)} key={index}>
        <ListItemText primary={previousState}/>
      </ListItem>
    ));
  }

  render () {
    let aListItems = this.getListItems(this.props.dialogState.isDialogOpen);

    return (<Dialog onClose={this.props.historyDialogViewClosed} open={this.props.dialogState.isDialogOpen}>
      <DialogTitle id="simple-dialog-title">Previously Selected Slide Values</DialogTitle>
      <List>
        {aListItems}
      </List>
    </Dialog>);
  }

}

HistoryDialogView.propTypes = {
  historyDialogViewClosed: PropTypes.func,
  previousStateClicked: PropTypes.func,
  dialogState: PropTypes.object,
  dropDown: PropTypes.object
};

function mapStateToProps(state) {
  return {
    dialogState: state.finishButton,
    dropDown: state.dropDown
  }
}

function mapActionToProps(dispatch) {
  return bindActionCreators({
    historyDialogViewClosed: FinishButtonAction().historyDialogViewClosed,
    previousStateClicked: FinishButtonAction().previousStateClicked
  }, dispatch);
}

export default connect(mapStateToProps, mapActionToProps)(HistoryDialogView);