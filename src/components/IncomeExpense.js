import React from 'react'



export default function IncomeExpense({totalExpensive,totalIncome}) {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">${totalIncome}</p>
            </div>
            <div className='my-line'></div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">${totalExpensive}</p>
            </div>
        </div>
    )
}