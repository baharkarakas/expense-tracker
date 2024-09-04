import React, { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;

  // const bills = useMemo(() => {
  //   return income + expense;
  // }, [transactions])

  for (let i = 0; i < transactions.length; i++) {
    const amount = transactions[i].amount;
    if (amount > 0) {
      income += amount;
    } else if (amount < 0) {
      expense += amount;
    }
  }
  // helo

  income = income.toFixed(2);
  expense = (-expense).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
