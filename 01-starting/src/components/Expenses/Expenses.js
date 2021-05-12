import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState("2021");

  const filterChangeHandler = (newData) => {
    setFilterValue(newData);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterValue}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
