import React from 'react';
import { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import Button from 'material-ui/Button';
import { switchUserPopup } from "../actions/action-creators";

class AddUserBtn extends Component {
  openPopup = () => {
    this.props.dispatch(switchUserPopup());
  };

  render() {
    return (
      <div onClick={() => this.openPopup()}>
        <Button color="inherit">Add user</Button>
      </div>
    )
  }
}

export default connect(state => state)(AddUserBtn);
