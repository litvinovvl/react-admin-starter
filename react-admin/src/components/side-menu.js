import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class SideMenu extends Component {

  render() {

    return (
      <div className='main-menu'>
        <Link className='link' to='/' replace>
          <div className='menu-item'>Users</div>
        </Link>
      </div>
    )
  }
}

export default SideMenu;
