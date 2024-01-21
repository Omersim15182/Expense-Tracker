import React from 'react';


export default function TransactionList({showTitle = true , amount }) {


  console.log({amount});
  return (
    <div>
       {showTitle && <h3>History</h3>}
        <ul id="list" className="list" >
          <li className="minus">
            Cash  <span>-${amount}</span><button className="delete-btn">x</button>
          </li>
        </ul>
   

    </div>
  );
}