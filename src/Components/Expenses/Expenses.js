import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
