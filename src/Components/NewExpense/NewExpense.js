import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const submitFormHandler = (newExpenseData) =>{
        const newExpenseWithId = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        console.log(newExpenseWithId);
        props.onSaveFormData(newExpenseWithId)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={submitFormHandler} />
    </div>
  );
};

export default NewExpense;
