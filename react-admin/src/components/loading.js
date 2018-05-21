import React from 'react';
import { Component } from 'react';
import '../App.css';
import { RingLoader } from 'react-spinners';

class Loading extends Component {
  render() {
    return (
      <div className='loading'>
        <RingLoader
          color={'#123abc'}
          loading={true}
        />
      </div>
    )
  }

}

export default Loading;
