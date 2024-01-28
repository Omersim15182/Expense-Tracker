import React, { useState } from 'react'



export default function IncomeExpenseve({totalExpensive,totalIncome}) {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">${totalIncome}</p>
            </div>
            <div className='line'></div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">${totalExpensive}</p>
            </div>
        </div>
    )
}