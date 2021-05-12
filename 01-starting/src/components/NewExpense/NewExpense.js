import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const addExpenseHandler = (newData) => {
    const expenseData = {
      ...newData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
