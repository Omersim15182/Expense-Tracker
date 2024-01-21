import React from 'react';


export default function TransactionList({ showTitle = true, amount, text = null }) {


  console.log({ amount, text });
  return (
    <div>
      {showTitle && <h3>History</h3>}
      {text && <ul id="list" className={`list ${amount < 0 ? 'minus' : 'plus'}`}>
        
      <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{amount < 0 ? '-' : ''}${(amount)}</span>
            <button className="delete-btn">x</button>
          </li>
        
      </ul>}


    </div>
  );
}