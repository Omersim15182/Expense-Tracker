import React, { useState } from 'react';


export default function AddNewTransaction({ onAddTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = { TransactionList: `${text} $${amount}` };
    onAddTransaction(newTransaction);
    setText('');
    setAmount('');
    
  };

 

  return (
    <div className='AddNewTransaction'>
      <h3>Add new transaction</h3>
      <div className='Line-New-Transaction'></div>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label><br></br>
          
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
          
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="button" className="btn" onClick={handleAddTransaction}>
          Add transaction
        </button>
      </form>
    </div>
  );
}