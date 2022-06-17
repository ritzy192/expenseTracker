import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: '1', title: "Grocery", date: new Date(2022, 4, 14), price: 123 },
    { id: '2', title: "Books", date: new Date(2022, 5, 15), price: 234 },
  ];
  const saveFormDataHandler = (newExpenseData) =>{
    console.log(newExpenseData)
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onSaveFormData={saveFormDataHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
