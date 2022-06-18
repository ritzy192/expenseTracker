import {useState} from 'react'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022')
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter yearSelected={filterYear} onFilterChange={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
