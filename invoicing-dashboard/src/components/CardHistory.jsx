import gallery from "../assets/gallery.png";
import waves from "../assets/card-style.png";

const CardHistory = () => {
  return (
    <div className="section-3 rounded-lg shadow-sm m-6 p-4 bg-white lg:w-1/2">
      <div className="my-card">
        <span className="title text-lg font-bold text-[#064061] font-Montserrat">My Card</span>
        <div className="card bg-[#4EB7F2] w-full text-white font-Montserrat rounded-lg mt-2 py-4 relative">
          <div className="header flex justify-between items-center mb-10">
            <div className="information ml-6">
              <div className="title font-light text-sm mb-1">Name Card</div>
              <div className="holder-name font-mediumBold text-md">Syah Bandi</div>
            </div>
            <div className="icon mr-8 mb-1">
              <img src={gallery} alt="galley-icon" className="w-5 h-5" />
            </div>
          </div>
          <div className="card-humber font-bold text-xl text-right mr-4">0918 8124 0042 8129</div>
          <div className="card-ex font-normal text-md text-right mr-4">12/20 - 124</div>
          <img src={waves} alt="waves" className="absolute top-0" />
        </div>
        <div className="slide-circle flex my-3">
          <span className="bg-[#4EB7F2] rounded-full w-6 h-2"></span>
          <span className="bg-gray-300 rounded-full w-2 h-2 ml-2"></span>
          <span className="bg-gray-300 rounded-full w-2 h-2 ml-2"></span>
        </div>
      </div>
      <hr className="opacity-60" />
      <div className="transcation-history font-Montserrat">
        <div className="header flex justify-between items-center my-3">
          <span className="title text-lg font-bold text-[#064061] ">Transaction History</span>
          <span className="text-[#4EB7F2] font-bold">See all</span>
        </div>
        <div className="date text-[#AAAAAA] text-md font-medium mb-6">13 April 2022</div>

        <div className="history-detail flex justify-between items-center py-2 px-4 bg-[#F7F9FA] font-Montserrat rounded-lg mb-2.5">
          <div className="information">
            <div className="transcation font-normal text-md text-[#064061]">Cash Witdrawal</div>
            <div className="date font-mediumBold text-md text-[#AAAAAA]">13 Apr, 2022</div>
          </div>
          <div className="amount font-bold text-md text-red-500">$20,129</div>
        </div>

        <div className="history-detail flex justify-between items-center py-2 px-4 bg-[#F7F9FA] font-Montserrat rounded-lg">
          <div className="information">
            <div className="transcation font-normal text-md text-[#064061]">Landing Page Project</div>
            <div className="date font-mediumBold text-md text-[#AAAAAA]">13 Apr, 2022</div>
          </div>
          <div className="amount font-bold text-md text-green-500">$20,129</div>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
