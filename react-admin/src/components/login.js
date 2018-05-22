import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from "../actions/action-creators";

class Login extends Component {
  login = () => {
    this.props.dispatch(login(this.loginForm));
  };

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.login} ref={node => this.loginForm = node} >
          <input type='text' placeholder='login...'/>
          <input type='password' placeholder='password...'/>
          <input type='submit' value='Login'/>
        </form>
        {this.props.loginFailed ? <p className='red'>Login or password is wrong!</p> : null}
      </div>
    )
  }
}


export default connect(state => state)(Login);
