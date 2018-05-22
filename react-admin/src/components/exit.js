import React from 'react';
import { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import Button from 'material-ui/Button';
import { loginFetch } from "../actions/action-creators";

class Exit extends Component {
  exit = () => {
    this.props.dispatch(loginFetch());
  };

  render() {
    return (
      <div onClick={() => this.exit()}>
        <Button color="inherit">Logout</Button>
      </div>
    )
  }
}

export default connect(state => state)(Exit);
