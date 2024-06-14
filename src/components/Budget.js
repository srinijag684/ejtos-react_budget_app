import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        setBudgetLimit(newBudget);
    }

    const setBudgetLimit = (newBudget) => {

        if (newBudget < totalExpenses){
            alert(`The value cannot be lower than the already allocated budget ${totalExpenses}`);
        }

        if (newBudget >= 20000){
            alert(`Budget cannot exceed ${currency}20000`);
        }
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
