import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expenses/Expense";
import { NewLifecycle } from "react";
import NewExpense from "./components/newExpense/newExpense";
import {useState} from 'react'
  const dumyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
  const [expenses, setExpense] = useState(dumyExpenses)
  const addExpenseHandelar = expense => {
    setExpense(prev => {
      return  [expense, ...expenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandelar} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
