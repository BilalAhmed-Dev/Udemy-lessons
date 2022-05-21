import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //OPTION 1
  const [enteredTitle, setEnteredTitle] = useState("");
  // const [enterdAmount, setEnterdAmount] = useState("");
  // const [date, setDate] = useState("");

  //OPTION 2
  const [userInput, setUserInput] = useState({
    // enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  /// OPTION 1 putting states one by one which is easy....
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  /// OPTION 2
  // putting all states in one object
  const amountChangeHandler = (e) => {
    // setUserInput({
    // ...userInput,
    // enteredAmount: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onExpenseFormSubmition(expenseData);

    setUserInput({
      enteredAmount: "",
      enteredDate: "",
    });
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{enteredTitle}</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>{userInput.enteredAmount}</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>{userInput.enteredDate}</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
