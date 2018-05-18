import React from 'react';
import { Component } from 'react';

export default class TableItem extends Component {

  render() {
    return (
      <tr className='table-item'>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
      </tr>
    )
  }
}
