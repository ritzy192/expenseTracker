import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummyExpenses = [
  { id: "1", title: "Grocery", date: new Date(2021, 4, 14), price: 123 },
  { id: "2", title: "Books", date: new Date(2022, 5, 15), price: 234 },
  { id: "3", title: "Headphones", date: new Date(2022, 2, 15), price: 564 },
  { id: "2", title: "Phone", date: new Date(2021, 8, 15), price: 700 },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const saveFormDataHandler = (newExpenseData) => {
    console.log(newExpenseData);
    const newExpense = {
      id: newExpenseData.id,
      title: newExpenseData.enteredTitle,
      price: newExpenseData.enteredAmount,
      date: new Date(newExpenseData.enteredDate)
    }
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onSaveFormData={saveFormDataHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
