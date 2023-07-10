import React from 'react'

const ExpenseItem = () => {
    const expenseDate = new Date(2023,7,10);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 297.64; 
  return (
    <div className='expense-item'>
        <div >{expenseDate.toISOString()}</div>
        <div className='expense-item-description'>
            <h2>{expenseTitle}</h2>
        </div>
        <div className='expenseitem-price'>
               ${expenseAmount}
        </div>
        
        </div>
  )
}

export default ExpenseItem