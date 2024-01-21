import './App.css';
import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenseve from './components/IncomeExpenseve'
import TransactionList from './components/TransactionList'
import AddNewTransaction from './components/AddNewTransaction'
function App() {


  return (
    
    <div className='App'>
      <div className='App-Container'>
        <Header />
        <Balance />
        <IncomeExpenseve />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
