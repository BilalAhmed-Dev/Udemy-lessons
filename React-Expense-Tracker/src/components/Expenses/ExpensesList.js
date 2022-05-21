import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      {props.data.length > 0 ? (
        props.data.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      )}
    </ul>
  );
};

export default ExpensesList;
