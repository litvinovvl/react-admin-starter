import React from 'react';
import { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import {switchUserPopup, submitNewUser} from "../actions/action-creators";


class AddUser extends Component {
  closePopup = () => {
    this.props.dispatch(switchUserPopup());
  };

  submitForm = () => {
    let arr = Array.prototype.slice.call(this.form.children);
    arr = arr.splice(0, 4);
    arr = arr.map(input => input.value);
    this.props.dispatch(submitNewUser({name: arr[0], surname: arr[1], age: arr[2], status: arr[3]}));
  };

  render() {
    return (
        <div className='popup'>
          <div className='popup-inner'>
            <h1>Add new user</h1>
            <form className='form' onSubmit={this.submitForm} ref={node => this.form = node}>
              <input type='text' placeholder='First name' />
              <input type='text' placeholder='Last name'/>
              <input type='number' placeholder='Age'/>
              <input type='text' placeholder='Status'/>
              <input type="submit" value='Submit'/>
            </form>
            <button onClick={this.closePopup}>Close</button>
          </div>
        </div>
    )
  }
}

export default connect(state => state)(AddUser);
