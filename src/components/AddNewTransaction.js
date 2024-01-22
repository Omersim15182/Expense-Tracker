import React, { useState } from 'react';
import TransactionList from './TransactionList';

export default function AddNewTransaction() {
  const [transactions, setTransactions] = useState([{ text: '', amount: '' }]);

  const handleTextChange = (e, index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index] = {...updatedTransactions[index],text: e.target.value,};
    setTransactions(updatedTransactions);
  };

  const handleAmountChange = (e, index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index] = {...updatedTransactions[index], amount: e.target.value,};
    setTransactions(updatedTransactions);
  };

  const handleButtonClick = () => {
    const newTransaction = {
      text: '',
      amount: '',
    };

    setTransactions([...transactions, newTransaction]);
  };
  console.log({transactions})

  return (
    <div className='AddNewTransaction'>
      {transactions.map((transaction, index) => (
        <TransactionList
          key={index}
          showTitle={index ===0}
          amount={transaction.amount}
          text={transaction.text}
        />
      ))}
      <h3>Add new transaction</h3>
      <div className='Line-New-Transaction'></div>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <br></br>
          <input
            type='text'
            id='text'
            value={transactions[transactions.length - 1]?.text || ''}
            onChange={(e) => handleTextChange(e, transactions.length - 1)}
            placeholder='Enter text...'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='amount'>Amount (negative - expense, positive - income)</label>
          <input
            type='number'
            id='amount'
            value={transactions[transactions.length - 1]?.amount || ''}
            onChange={(e) => handleAmountChange(e, transactions.length - 1)}
            placeholder='Enter amount...'
          />
        </div>
        <button type='button' className='btn' onClick={handleButtonClick}>
          Add transaction
        </button>
      </form>
    </div>
  );
}