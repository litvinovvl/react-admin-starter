import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { connect } from 'react-redux';

import './App.css';

import UserTable from './components/user-table';
import Loading from './components/loading';
import {loadUsers} from "./actions/action-creators";

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
              <Icon> menu </Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className="App-header-title">
              React Admin
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {this.props.pending ? <Loading /> : <UserTable />}
      </div>
    );
  }
}

let Test = connect(state => state)(App);

export default Test;