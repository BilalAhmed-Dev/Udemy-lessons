// import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title); // i could use empty useState to create an empty variable and then assign it with setTitle
  // const [date, setDate] = useState(props.date); // i could use empty useState to create an empty variable and then assign it with setTitle

  // const clickHandler = () => {
  //   setTitle(Math.floor(Math.random() * 100));
  //   setDate(new Date(Date.now()));
  //   console.log("clicked");
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>

          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
