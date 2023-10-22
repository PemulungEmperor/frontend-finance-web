import Expenses from "./Expenses";
import QuickInvoice from "./QuickInvoice";

const ExpensesInvoice = () => {
  return (
    <div className="ml-4 lg:w-1/2">
      <Expenses />
      <QuickInvoice />
    </div>
  );
};

export default ExpensesInvoice;
