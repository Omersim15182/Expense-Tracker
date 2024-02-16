import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenseve from './components/IncomeExpenseve';
import TransactionList from './components/TransactionList';
import AddNewTransaction from './components/AddNewTransaction';

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalExpensive, setTotalExpensive] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  
  const updateTotalAmount = (newTotalAmount) => {
    setTotalAmount(newTotalAmount);
  };
  const updateTotalExpensive = (newTotalExpensive) => {
    setTotalExpensive(newTotalExpensive);
  };
  const updateTotalIncome = (newTotalIncome) => {
    setTotalIncome(newTotalIncome);
  };


  return (
    <div className='App'>
      <div className='App-Container'>
        <Header />
        {/* Pass totalAmount and updateTotalAmount to Balance */}
        <Balance totalAmount={totalAmount} />
        <IncomeExpenseve totalExpensive={totalExpensive} totalIncome={totalIncome} />
        <TransactionList />
        {/* Pass updateTotalAmount function to AddNewTransaction */}
        <AddNewTransaction updateTotalIncome={updateTotalIncome} updateTotalExpensive={updateTotalExpensive} updateTotalAmount={updateTotalAmount} />
      </div>
    </div>
  );
}

export default App;