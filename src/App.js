import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenseve from './components/IncomeExpenseve';
import TransactionList from './components/TransactionList';
import AddNewTransaction from './components/AddNewTransaction';

function App() {
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to update the totalAmount state
  const updateTotalAmount = (newTotalAmount) => {
    setTotalAmount(newTotalAmount);
  };
console.log("appAmount:",totalAmount);

  return (
    <div className='App'>
      <div className='App-Container'>
        <Header />
        {/* Pass totalAmount and updateTotalAmount to Balance */}
        <Balance totalAmount={totalAmount} />
        <IncomeExpenseve />
        <TransactionList />
        {/* Pass updateTotalAmount function to AddNewTransaction */}
        <AddNewTransaction updateTotalAmount={updateTotalAmount} />
      </div>
    </div>
  );
}

export default App;