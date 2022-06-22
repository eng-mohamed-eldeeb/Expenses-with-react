import './NewExpense.css'
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [click, setClick] = useState(false);
    const clickHandeler = () => {
        setClick(true)
    }
    const clickHandelerf = () => {
        setClick(false)
    }
    const saveExpenseDataHandelar = (enterdEpenseData) => {
        const expenseData = {
            ...enterdEpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setClick(false)
    };
    return (
        <div className='new-expense'>
            {!click && <button onClick={clickHandeler}>add new expense</button>}
            {click && <ExpenseForm onclick={clickHandelerf} onSaveExpenseData = {saveExpenseDataHandelar} />}
        </div>
    )
}

export default NewExpense;