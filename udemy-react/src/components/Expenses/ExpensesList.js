import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses yet!</h2>
    }
  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
