import ExpensesList from "./ExpensesList";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./DisplayExpenses.css";
const DisplayExpenses = (props) => {
  const [year, setYear] = useState(2021);
  // const [props_values, setProps] = useState(props);
  const onYearChangeHandler = (year) => {
    setYear(year);
    // setProps(props_values);
  };

  // console.log(props.data);
  const filteredPropsArray = props.data.filter(
    (prop) => prop.date.getFullYear() === +year
  );
  // console.log(filteredPropsArray);
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={onYearChangeHandler} />
      <ExpensesChart expenses={filteredPropsArray} />
      <ExpensesList data={filteredPropsArray} />
    </Card>
  );
};

export default DisplayExpenses;
