import React from 'react';
import { Component } from 'react';
import TableItem from './table-item';
import '../App.css';
import { connect } from "react-redux";

class UsersTable extends Component {

  render() {

    let items = this.props.users.map((item, index) => <TableItem key={index} id={item.id}
                                                                   name={item.firstName}
                                                                   surname={item.lastName}
                                                                   age={item.age}
                                                                   visits={item.visits}
                                                                   progress={item.progress}
                                                                   status={item.status}/>);

    return (
      <table className='main-table'>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Visits</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
}

export default connect(state => state)(UsersTable);
