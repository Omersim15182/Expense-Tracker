import React from 'react'


export default function AddNewTransaction() {
  return (
    <div className='AddNewTransaction'>
      <h3>Add new transaction</h3>
      <div className='Line-New-Transaction'></div>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label><br></br>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>

        <div class="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
