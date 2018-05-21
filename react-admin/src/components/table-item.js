import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TableItem extends Component {

  render() {
    return (
      <tr className='table-item'>
        <td><Link to={`/users/${this.props.id}`}>{this.props.id}</Link></td>
        <td><Link to={`/users/${this.props.id}`}>{this.props.name}</Link></td>
        <td><Link to={`/users/${this.props.id}`}>{this.props.surname}</Link></td>
        <td><Link to={`/users/${this.props.id}`}>{this.props.age}</Link></td>
        <td><Link to={`/users/${this.props.id}`}>{this.props.visits}</Link></td>
        <td><Link to={`/users/${this.props.id}`}>{this.props.progress}</Link></td>
        <td><Link to={`/users/${this.props.id}`}>{this.props.status}</Link></td>
      </tr>
    )
  }
}
