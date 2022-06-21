import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import FilteredExpenses from "./FilteredExpenses";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const expensesByYear = props.items.filter((expense) => {
    return expense.date.getFullYear()===parseInt(filterYear)
  });
  console.log('expenses by year')
  console.log(expensesByYear) 
  return (  
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearSelected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={expensesByYear}/>
        <FilteredExpenses items={expensesByYear}/>
      </Card>
    </div>
  );
};

export default Expenses;
