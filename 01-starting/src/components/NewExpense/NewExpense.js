import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isAdding, setIsAdding] = useState(false);

  const addExpenseHandler = (newData) => {
    const expenseData = {
      ...newData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsAdding(false);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
