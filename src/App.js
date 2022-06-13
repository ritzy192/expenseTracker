import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    { title: "Grocery", date: new Date(2022, 4, 14), price: 123 },
    { title: "Books", date: new Date(2022, 5, 15), price: 234 },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
