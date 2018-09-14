import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import DropDownAction from "../action/dropdown-action";

class DropDown extends Component{

  getOptions () {
    let oDropDownProps = this.props.dropDownData;
    return oDropDownProps.dropDownItems.map((item, index) => (<MenuItem key={item.id} value={item.data}>{item.data}</MenuItem>));
  }

  dropDownChanged (event) {
    this.props.dropDownChanged(parseInt(event.target.value));
  }

  render () {
    let iSelectedItem = this.props.dropDownData.selectedItem;

    return (
      <div className="dropDownContainer">
        <div className="dropDownTextContainer">
          <InputLabel htmlFor="select-slides">Select Number Of Slides</InputLabel>
        </div>
        <Select value={iSelectedItem}
                onChange={this.dropDownChanged.bind(this)}
                inputProps={{
                  name: "selectSlides",
                  id: "select-slides"
                }}>
          {this.getOptions()}
        </Select>
      </div>
    );
  }

}

DropDown.propTypes = {
  dropDownData: PropTypes.object
};

function mapStateToProps(state) {
  return {
    dropDownData: state.dropDown
  };
}

function mapActionToProps(dispatch) {
  return bindActionCreators({
    dropDownChanged: DropDownAction().dropDownValueChanged
  }, dispatch);
}

export default connect(mapStateToProps, mapActionToProps)(DropDown);