import User from "./subcomponents/User";
import TextInput from "./subcomponents/TextInput";

import face from "../assets/face.png";
import face2 from "../assets/face2.png";

const QuickInvoice = () => {
  return (
    <div className="quick-invoice shadow-sm rounded-lg border m-6 p-2 pb-4 bg-white">
      <div className="header flex justify-between items-center m-3">
        <span className="title text-lg font-bold text-[#064061] font-Montserrat">Quick Invoice</span>
        <div className="icon-circle-plus bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-[#4EB7F2] font-bold mb-1">+</span>
        </div>
      </div>
      <div className="ml-4 latest-transcation overflow-x-auto">
        <span className="title text-sm text-[#064061] font-Montserrat font-medium mb-1">Latest Transaction</span>
        <div className="user-transaction flex">
          <User name="Madrani Andi" email="Mandraniadi20@gmail.com" avatar={face} />
          <User name="Josua Nunito" email="JoshNunito@gmail.com" avatar={face2} />
          <User name="Josua Nunito" email="JoshNunito@gmail.com" avatar={face2} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mx-4 my-2">
        <TextInput label="Customer Name" id="customer_name" type="text" placeholder="Type customer name" />
        <TextInput label="Customer Email" id="customer_email" type="text" placeholder="Type customer email" />
        <TextInput label="Item Name" id="item_name" type="text" placeholder="Type item name" />

        <div className="currency mb-2 ">
          <label htmlFor="item_amount" className="mb-2 text-sm text-[#064061] font-Montserrat font-mediumBold">
            Item Name
          </label>
          <select id="item_amount" className="border-none text-[#AAAAAA] py-3 text-md font-Montserrat font-medium rounded-lg block w-full appearance-none pointer-events-none">
            <option defaultValue="usd">USD</option>
          </select>
        </div>
        <div className="btn px-3.5 py-3 text-sm text-[#4EB7F2] rounded-lg font-Montserrat font-bold text-center">Add more details</div>
        <div className="btn px-3.5 py-3 bg-[#4EB7F2] text-sm text-white rounded-lg font-Montserrat font-medium text-center">Send Money</div>
      </div>
    </div>
  );
};

export default QuickInvoice;
