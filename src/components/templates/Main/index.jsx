import React, { useState } from "react";
import Sidebar from "../../organisms/Sidebar";
import Navbar from "../../organisms/navbar.jsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function MainLayout({ children, date, title, option }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full font-inter bg-gray-200 ">
        <div className="flex justify-center items-center w-full">
          {sidebarVisible && (
            <div className="hidden md:flex justify-center w-[20%] h-screen">
              {/* sidebar */}
              <Sidebar />
            </div>
          )}
          <div className="hidden md:flex">
            <button onClick={toggleSidebar} className="md:focus:outline-none">
              {sidebarVisible ? <IoIosArrowBack size={20} /> : <IoIosArrowForward size={40} />}
            </button>
          </div>

          {/* content */}
          <div className="flex justify-center w-screen h-screen p-4">
            <div className="flex flex-col w-full bg-[#EEEEEE] rounded-xl shadow-lg">
              <div className="flex justify-between w-full border-b-2 px-8 py-4">
                <h1 className="text-gray-700 font-bold text-xl">{title}</h1>
                <div className="flex">
                  {option}

                </div>
              </div>
              <div className="flex flex-col justify-center px-8 py-4 overflow-y-auto">
                <div className="relative overflow-x-auto">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}