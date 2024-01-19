import React from 'react';
import { useState } from 'react';
import TransactionList from './TransactionList';

export default function AddNewTransaction() {
  const [addLabel, setAddLabel] = useState(0);

  const handleAddLabel = () => {
    // Increment the component count on button click
    setAddLabel(addLabel + 1);
  };
 
  return (
    <div className='AddNewTransaction'> 
    {Array.from({ length: addLabel }).map((_, index) => (
        <TransactionList key={index} showTitle={false} />
      ))}
      <h3>Add new transaction</h3>
      <div className='Line-New-Transaction'></div>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label><br></br>
          
          <input type="text" id="text" placeholder="Enter text..."  />
          
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          
          <input type="number" id="amount" placeholder="Enter amount..."  />
        </div>
        
        <button type="button" className="btn" onClick={handleAddLabel} >
          Add transaction
        </button>
      </form>
    </div>
  );
}