import gallery from "./assets/gallery.png";
import circleSquare from "./assets/circle-square.png";
import face from "./assets/face.png";
import face2 from "./assets/face2.png";
import face3 from "./assets/face3.png";

export default function App() {
  return (
    <div className="bg-[#F7F9FA] flex">
      {/* Sidebar */}
      <div className="float-left sidebar w-56 bg-white shadow-md rounded-sm h-screen lg:w-60">
        <div className="flex justify-center items-center  btn-photo py-5 px-2 my-3 mx-6  bg-gray-300 hover:bg-gray-400 shadow-sm relative">
          <img src={gallery} alt="gallery-icon" className="absolute w-5 h-5" />
        </div>
        <div className="profile flex py-1 px-4 m-3 bg-slate-50 hover:bg-slate-100 rounded-lg">
          <span className="avatar">
            <img src={face3} alt="avatar" className="w-8 h-8" />
          </span>
          <div className="credentials ml-2">
            <div className="name font-bold text-md text-[#064061] font-Montserrat">Lekan Okeowo</div>
            <div className="email text-sm text-[#AAAAAA] ">demo@gmail.com</div>
          </div>
        </div>

        <div className="flex m-3 items-center border-r-[3px] border-[#4EB7F2]">
          <span className="icon">
            <img src={circleSquare} alt="dashboard-icon" className="w-5 h-5" />
          </span>
          <p className="text-[#4EB7F2] text-sm font-bold font-Montserrat ml-3">Dashboard</p>
        </div>
      </div>
      {/* End Sidebar */}

      {/* All Expenses */}
    </div>
  );
}
