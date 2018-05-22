import React from 'react';
import { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { rmUser, editUser, confirmEditUser, resetEditing } from "../actions/action-creators";

class UsersInfo extends Component {
  dispatchRmUser = () => {
    this.props.dispatch(rmUser([this.props.match.params.id, this.props.history.push]));
  };

  dispatchEdit = () => {
    this.props.dispatch(editUser());
  };

  dispatchConfirmEdit = () => {
    this.props.dispatch(confirmEditUser(this.newData));
  };

  reset = () => {
    this.props.dispatch(resetEditing());
  };

  render () {
    let user = this.props.users.find(user => user.id === Number(this.props.match.params.id));
    return (
      <div className='user-info'>
        <ul className='user-info-list' ref={node => this.newData = node}>
          <li>Id: <span>{user.id}</span></li>
          <li>First name:
            <span className={this.props.editing ? 'hidden' : ''}> {user.firstName}</span>
            <input type='text' className={this.props.editing ? '' : 'hidden'} defaultValue={user.firstName}/>
          </li>
          <li>Last name:
            <span className={this.props.editing ? 'hidden' : ''}> {user.lastName}</span>
            <input type='text' className={this.props.editing ? '' : 'hidden'} defaultValue={user.lastName}/>
          </li>
          <li>Age:
            <span className={this.props.editing ? 'hidden' : ''}> {user.age}</span>
            <input type='number' className={this.props.editing ? '' : 'hidden'} defaultValue={user.age}/>
          </li>
          <li>Visits:
            <span className={this.props.editing ? 'hidden' : ''}> {user.visits}</span>
            <input type='number' className={this.props.editing ? '' : 'hidden'} defaultValue={user.visits}/>
          </li>
          <li>Progress:
            <span className={this.props.editing ? 'hidden' : ''}> {user.progress}</span>
            <input type='number' className={this.props.editing ? '' : 'hidden'} defaultValue={user.progress}/>
          </li>
          <li>Status:
            <span className={this.props.editing ? 'hidden' : ''}> {user.status}</span>
            <input type='text' className={this.props.editing ? '' : 'hidden'} defaultValue={user.status}/>
          </li>
        </ul>
        <div className='user-btns'>
          <button className='btn' onClick={this.props.editing ? this.dispatchConfirmEdit: this.dispatchEdit}>{this.props.editing ? 'Confirm' : 'Edit'}</button>
          <button className='btn' onClick={this.dispatchRmUser}>Remove</button>
          <Link to='/'><button className='btn' onClick={this.reset}>Back</button></Link>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(state => state)(UsersInfo));
