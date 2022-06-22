import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enterdDate, setenterdDate] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const titleChangeHandelar = (e) => {
    setenteredTitle(e.target.value);
  };
  const AmountChangeHandelar = (e) => {
    setenteredAmount(e.target.value);
  };
  const dateChangeHandelar = (e) => {
    setenterdDate(e.target.value);
  };

  const submitHandlar = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData(expenseData);
    setenteredTitle("");
    setenteredAmount("");
    setenterdDate("");
  };
  return (
    <form onSubmit={submitHandlar}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandelar}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandelar}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            value={enterdDate}
            onChange={dateChangeHandelar}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onclick} type="button" >cancel</button>
        <button onClick={props.onclick} type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
