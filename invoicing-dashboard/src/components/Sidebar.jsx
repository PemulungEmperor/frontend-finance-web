import User from "./subcomponents/User";

import gallery from "../assets/gallery.png";
import circleSquare from "../assets/circle-square.png";
import face3 from "../assets/face3.png";

const Sidebar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 z-40 hidden bg-white  rounded-sm lg:w-1/3 lg:block lg:static">
      <div className="flex justify-center items-center  btn-photo py-5 px-2 my-3 mx-6  bg-gray-300 hover:bg-gray-400 shadow-sm relative">
        <img src={gallery} alt="gallery-icon" className="absolute w-5 h-5" />
      </div>
      {/* User Span */}
      <User name="Lekan Okeowo" email="demo@gmail.com" avatar={face3} />
      <div className="flex m-3 items-center border-r-[3px] border-[#4EB7F2]">
        <span className="icon">
          <img src={circleSquare} alt="dashboard-icon" className="w-5 h-5" />
        </span>
        <p className="text-[#4EB7F2] text-sm font-bold font-Montserrat ml-3 py-2">Dashboard</p>
      </div>
    </div>
  );
};

export default Sidebar;
