import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Grocery", date: new Date(2022, 4, 14), price: 123 },
    { title: "Books", date: new Date(2022, 5, 15), price: 234 },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
