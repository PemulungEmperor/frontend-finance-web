import Sidebar from "./components/Sidebar";
import Expenses from "./components/Expenses";
import QuickInvoice from "./components/QuickInvoice";
import CardHistory from "./components/CardHistory";
import ExpensesInvoice from "./components/ExpensesInvoice";

export default function App() {
  return (
    <div className="bg-[#F7F9FA] lg:flex overflow-hidden scrollbar-hide">
      <Sidebar />
      <ExpensesInvoice />
      <CardHistory />
    </div>
  );
}
