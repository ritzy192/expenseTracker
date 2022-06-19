import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  props.items.map((expense) => console.log(expense));
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearSelected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
