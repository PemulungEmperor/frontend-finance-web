import CardExpense from "./subcomponents/CardExpense";
import money from "../assets/money-icon.png";
import debit from "../assets/debit.png";
import kredit from "../assets/kredit.png";

const Expenses = () => {
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
        <CardExpense
          bgColor="bg-[#4EB7F2]"
          chevron="text-white"
          contentTextColor="text-white"
          dateTextColor="text-slate-100"
          amountTextColor="text-white"
          content="Balance"
          date="20 April 2022"
          amount="$20,129"
          icon={money}
          altIcon="money-icon"
        />
        <CardExpense
          bgColor="bg-white"
          chevron="text-white"
          contentTextColor="text-[#064061]"
          dateTextColor="text-gray-400"
          amountTextColor="text-[#4EB7F2]"
          content="Income"
          date="15 February 2023"
          amount="$20,129"
          icon={debit}
          altIcon="debit-icon"
        />
        <CardExpense
          bgColor="bg-white"
          chevron="text-white"
          contentTextColor="text-[#064061]"
          dateTextColor="text-gray-400"
          amountTextColor="text-[#4EB7F2]"
          content="Expenses"
          date="24 Juli 2023"
          amount="$20,129"
          icon={kredit}
          altIcon="kredit-icon"
        />
      </div>
    </div>
  );
};

export default Expenses;
