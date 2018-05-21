import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {updateUsers} from "../actions/action-creators";
import { connect } from 'react-redux';

class SideMenu extends Component {
  goToUsers = () => {
    this.props.dispatch(updateUsers());
  };

  render() {

    return (
      <div className='main-menu'>
        <Link className='link' to='/' replace>
          <div className='menu-item' onClick={this.goToUsers}>Users</div>
        </Link>
      </div>
    )
  }
}

export default connect(state => state)(SideMenu);
