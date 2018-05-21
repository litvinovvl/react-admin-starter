import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import SideMenu from './components/side-menu';
import UserTable from './components/user-table';
import Loading from './components/loading';
import {loadUsers} from "./actions/action-creators";
import UserInfo from './components/user-info';
import AddUser from './components/add-user';
import AddUserBtn from './components/add-user-btn'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadUsers());
  }

  render() {
    return (
      <div className="App">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className="App-menu-btn" color="inherit" aria-label="Menu">
              <Icon> </Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className="App-header-title">
              React Admin
            </Typography>
            <AddUserBtn />
          </Toolbar>
        </AppBar>
        <HashRouter >
        <div className='main'>
          <SideMenu />
          {this.props.popup ? <AddUser /> : null}
          <Route exact path='/' component={this.props.pending ? Loading : UserTable} />
          <Route path='/users/:id' component={UserInfo} />
        </div>
        </HashRouter>
      </div>
    );
  }
}

let Main = connect(state => state)(App);

export default Main;
