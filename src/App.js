import './App.css';
import { useState } from 'react';
import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenseve from './components/IncomeExpenseve'
import TransactionList from './components/TransactionList'
import AddNewTransaction from './components/AddNewTransaction'
function App() {

const [list , setList] = useState([
  {TransactionList:""},
]);

const handleListAdd = () =>{
  setList([...list,{TransactionList:""}])

}
return (
  <div className='App'>
    <div className='App-Container'>
      <Header />
      <Balance />
      <IncomeExpenseve />
      {list.map((transaction, index) => (
        <TransactionList key={index} index={index} />
      ))}
      <AddNewTransaction onAddTransaction={handleListAdd} showTitle={false}/>
    </div>
  </div>
);
}

export default App;
