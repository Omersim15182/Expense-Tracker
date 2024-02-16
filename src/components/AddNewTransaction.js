import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';


export default function AddNewTransaction({ updateTotalIncome,updateTotalAmount, updateTotalExpensive }) {
  const [transactions, setTransactions] = useState([{ text: '', amount: '' }]);
  
  const handleTextChange = (e, index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index] = { ...updatedTransactions[index], text: e.target.value };
    setTransactions(updatedTransactions);
  };

  const handleAmountChange = (e, index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index] = { ...updatedTransactions[index], amount: e.target.value };
    setTransactions(updatedTransactions);
  };

  const handleRemoveTransaction = (indexToRemove) => {
    const updatedTransactions = transactions.filter((_, index) => index !== indexToRemove);
    setTransactions(updatedTransactions);
  };

  const handleButtonClick = () => {
    const newTransaction = { text: '', amount: '' };
    setTransactions([...transactions, newTransaction]);
  };

  const calculateTotalAmount = () => {
    const totalAmount = transactions.reduce((total, transaction) =>
      total + parseFloat(transaction.amount || 0), 0);
    return totalAmount.toFixed(2);
  };

  const calculateTotalExpensive = () => {
    const totalExpensive = transactions.reduce((total, { amount }) =>
      parseFloat(amount || 0) < 0 ? total + parseFloat(amount) : total, 0).toFixed(2);
    return totalExpensive;
  };
  const calculateTotalIncome = () => {
    const totalIncome = transactions.reduce((total, { amount }) =>
      parseFloat(amount || 0) > 0 ? total + parseFloat(amount) : total, 0).toFixed(2);
    return totalIncome;
  }
  
  useEffect(() => {
    updateTotalAmount(calculateTotalAmount());
    updateTotalExpensive(calculateTotalExpensive());
    updateTotalIncome(calculateTotalIncome());
  }, [transactions, updateTotalAmount, updateTotalExpensive , updateTotalIncome]);
  return (
    <div className="AddNewTransaction">
      {transactions.map((transaction, index) => (
        <TransactionList
          key={index}
          transaction={transaction}
          index={index}
          showTitle={index === 0}
          amount={transaction.amount}
          text={transaction.text}
          removeTrans={handleRemoveTransaction}
        />
      ))}
      <h3>Add new transaction</h3>
      <div className="Line-New-Transaction"></div>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            id="text"
            value={transactions[transactions.length - 1]?.text || ''}
            onChange={(e) => handleTextChange(e, transactions.length - 1)}
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
          <input
            type="number"
            id="amount"
            value={transactions[transactions.length - 1]?.amount || ''}
            onChange={(e) => handleAmountChange(e, transactions.length - 1)}
            placeholder="Enter amount..."
          />
        </div>
        <button type="button" className="btn" onClick={handleButtonClick}>
          Add transaction
        </button>
      </form>
    </div>
  );
}