import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveExpenseDataHandelar = (enterdEpenseData) => {
        const expenseData = {
            ...enterdEpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandelar} />
        </div>
    )
}

export default NewExpense;