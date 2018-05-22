import React from 'react';
import { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { loadUsers } from "../actions/action-creators";

class Filter extends Component {
  submitFilter = () => {
    let field, value, query;
    if (this.filter.querySelector('select').value && this.filter.querySelector('input[type=text]').value) {
      switch (this.filter.querySelector('select').value.toLowerCase()) {
        case 'surname':
          field = 'lastName';
          break;
        case 'name':
          field = 'firstName';
          break;
        default:
          field = this.filter.querySelector('select').value.toLowerCase();
      }
      value = this.filter.querySelector('input[type=text]').value;
      query = `${field}=${value}`;
    }
    this.props.dispatch(loadUsers(query));
  };

  render() {
    return (
      <form className='filter' ref={node => this.filter = node} onSubmit={this.submitFilter}>
        <select>
          <option>id</option>
          <option>Name</option>
          <option>Surname</option>
          <option>Age</option>
          <option>Visits</option>
          <option>Progress</option>
          <option>Status</option>
        </select>
        <input type='text'/>
        <input type='submit'/>
      </form>
    )
  }
}

export default connect(state => state)(Filter);
