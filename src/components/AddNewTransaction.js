import React from 'react';
import { useState } from 'react';
import TransactionList from './TransactionList';

export default function AddNewTransaction() {
  const [addLabel, setAddLabel] = useState(0);
  const [amounts, setAmounts] = useState([]);
  const [texts, setTexts] = useState([]);

  const handleTextChange = (e, index) => {
    const updatedTexts = [...texts];
    updatedTexts[index] = { text: e.target.value };
    setTexts(updatedTexts);
  };

  const handleAmountChange = (e, index) => {
    const updatedAmounts = [...amounts];
    updatedAmounts[index] = { amount: e.target.value };
    setAmounts(updatedAmounts);
  };

  const handleAddLabel = () => {
    setAddLabel(addLabel + 1);
    setAmounts([...amounts, { amount: '' }]);
  };

  return (
    <div className='AddNewTransaction'>
      {Array.from({ length: addLabel }).map((_, index) => (
        <TransactionList
          key={index} showTitle={false} amount={amounts[index]?.amount || ''}
          text={texts[index]?.text || ''}
        />
      ))}
      <h3>Add new transaction</h3>
      <div className='Line-New-Transaction'></div>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label><br></br>

          <input type="text" id="text" value={texts[addLabel]?.text || ''}
            onChange={(e) => handleTextChange(e, addLabel)} placeholder="Enter text..." />

        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>

          <input type="number" id="amount" value={amounts[addLabel]?.amount || ''}
            onChange={(e) => handleAmountChange(e, addLabel)} placeholder="Enter amount..." />
        </div>
        <button type="button" className="btn" onClick={handleAddLabel} >
          Add transaction
        </button>
      </form>
    </div>
  );
}