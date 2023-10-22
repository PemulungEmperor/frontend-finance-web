const CardExpense = ({ bgColor, contentTextColor, dateTextColor, amountTextColor, chevron, content, date, amount, icon, altIcon }) => {
  return (
    <div className={`rounded-lg border h-56 pb-4 ${bgColor} hover:bg-[#4EB7F2] group`}>
      <div className="header flex justify-between items-center m-2">
        <img src={icon} alt={altIcon} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${chevron} group-hover:text-white`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div className="detail ml-3">
        <p className={`font-medium font-Montserrat text-sm ${contentTextColor} group-hover:text-white`}>{content}</p>
        <p className={`font-normal font-Montserrat text-xs ${dateTextColor} group-hover:text-slate-100`}>{date}</p>
        <p className={`font-medium font-Montserrat text-md mt-3 ${amountTextColor} group-hover:text-slate-100`}>{amount}</p>
      </div>
    </div>
  );
};

export default CardExpense;
