import React from 'react';
import './App.css';

function Amount() {
  return (
    <div className='amount'>
        <div className='amount-icon'><i class="fa-solid fa-user icon-s"></i></div>
        <input className='amount-styles input-styles'type='text' placeholder="traveller"></input>
        <button type="button" class="btn btn-danger Search-btn">Search</button>
    </div>
  );
}

export default Amount;