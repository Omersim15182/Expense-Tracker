import React from 'react';
export default function Balance({totalAmount}) {
 
  return ( 
    <div className='my-Balance '>
      <h4>Your Balance</h4>
      <h1 id="balance">${totalAmount}</h1>
    </div>
  );
}