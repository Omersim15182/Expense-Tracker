import React from 'react';

export default function TransactionList({ index, showTitle = false, amount, text = null, removeTrans }) {
  console.log({ amount, text });
  const handleRemoveClick = () => {
    console.log('Clicked remove button for index:', index);
    removeTrans(index);
  };

  return (
    <div>
      {showTitle && <h3>History</h3>}
      {(text !== null) ? (
        <ul id="list" className={`list ${amount < 0 ? 'minus' : 'plus'}`}>
          <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{amount < 0 ? '' : ''}{(amount)}$</span>
            <button onClick={handleRemoveClick} className="delete-btn">x</button>
          </li>
        </ul>
      ) : (
        null
      )}
    </div>
  );
}