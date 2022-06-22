import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseList from "./ExpensesList";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
function Expense(props) {
  const [Year, setYear] = useState("2020");
  const filterHandelar = (option) => {
    setYear(option);
  };
  const filterd = props.expenses.filter(e => {
    return  e.date.getFullYear().toString() === Year;
  })
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter def={Year} filterHandelar={filterHandelar} />
        <ExpenseList items={filterd} />
      </Card>
    </>
  );
}

export default Expense;
