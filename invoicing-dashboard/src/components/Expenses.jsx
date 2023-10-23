import React, { useState, useEffect } from "react";
import { createServer } from "miragejs";

import CardExpense from "./subcomponents/CardExpense";
import money from "../assets/money-icon.png";
import debit from "../assets/debit.png";
import kredit from "../assets/kredit.png";

const Expenses = () => {
  let [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("/api/expenses")
      .then((res) => res.json())
      .then((json) => {
        setExpenses(json.expenses);
      });
  }, []);

  return (
    <div className="all-expens shadow-sm rounded-lg border m-6 bg-white">
      <div className="header flex justify-between items-center m-3">
        <span className="title text-lg font-bold text-[#064061] font-Montserrat">All Expenses</span>
        <div>
          <select className="text-[#064061] text-sm font-Montserrat font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option defaultValue="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="content grid grid-cols-3 gap-3 m-3">
        {expenses.map((exps) => (
          <CardExpense bgColor="bg-[#4EB7F2]" chevron="text-white" contentTextColor="text-white" dateTextColor="text-slate-100" amountTextColor="text-white" content={exps.content} date={exps.date} amount={exps.amount} icon={exps.icon} />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
