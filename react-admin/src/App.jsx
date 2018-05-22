import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
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
import Filter from "./components/filter";
import Login from "./components/login";
import Exit from "./components/exit";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadUsers());
  }

  render() {
    return (
      <div className="App">
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit" className="App-header-title">
              React Admin
            </Typography>
            {this.props.isLogged ? <AddUserBtn /> : null}
            {this.props.isLogged ? <Exit /> : null}
          </Toolbar>
        </AppBar>
        <HashRouter >
        <div className='main'>
          {this.props.isLogged ? <SideMenu /> : null}
          {this.props.popup ? <AddUser /> : null}
          <div className='table-place'>
            {(() => {if(this.props.isLogged) {
                return (<div>
                  <Filter />
                  <Route exact path='/' component={this.props.pending ? Loading : UserTable} />
                  <Route path='/users/:id' component={UserInfo} />
                </div>)
                } else {
                  return <Login />
                }
              })()}
          </div>
        </div>
        </HashRouter>
      </div>
    );
  }
}

let Main = connect(state => state)(App);

export default Main;
