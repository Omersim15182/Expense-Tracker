import axios from 'axios';
import React from 'react';

export default function TransactionList({ index, showTitle = false, amount, text = null, removeTrans, indexForDelete }) {

  const handleRemoveClick = () => {
    console.log('Clicked remove button for index:',indexForDelete );
    removeTrans(index);

    axios.delete(`http://localhost:4000/deleteData`, { data: { id: indexForDelete } })
      .then(res => {
        console.log(`data`, res);
      })
      .catch(Error => {
        console.log(`error`, Error);
      });
  };

  return (
    <div>
      {showTitle && <div><h3>History</h3></div>}
      <div>
        {(text !== null) ? (
          <ul id="list" className={`list ${amount < 0 ? 'minus' : 'plus'}`}>
            <li className={amount < 0 ? 'minus' : 'plus'}>
              {text} <span>{amount < 0 ? '' : ''}{(amount)}$</span>
              <button onClick={handleRemoveClick} className="delete-btn">x</button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}