import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
function Expense(props) {
  const [year, setYear] = useState('2020')
  const filterHandelar = option => {
    setYear(option);
  }
  return (
    <>
      <Card className="expenses">
      <ExpensesFilter def={year} filterHandelar = {filterHandelar} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </>
  );
}

export default Expense;
