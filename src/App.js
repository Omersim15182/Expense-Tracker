import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddNewTransaction from './components/AddNewTransaction';
import './App.css'; // Import CSS file

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
        <Balance totalAmount={totalAmount} />
        <IncomeExpense totalExpensive={totalExpensive} totalIncome={totalIncome} />
        <TransactionList />
        <AddNewTransaction
          updateTotalIncome={updateTotalIncome}
          updateTotalExpensive={updateTotalExpensive}
          updateTotalAmount={updateTotalAmount}
        />
      </div>
    </div>
  );
}

export default App;
