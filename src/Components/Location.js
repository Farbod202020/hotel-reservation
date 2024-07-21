import React from 'react';
import './App.css';

function Location() {
  return (
    <div className='location'>
        <div className='location-icon'><i class="fa-solid fa-location-dot icon-s"></i></div>
        <input className='location-styles input-styles'type='text' placeholder="Going to"></input>
    </div>
  );
}

export default Location;