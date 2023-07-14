import React, { useState } from "react";
import Sidebar from "../../organisms/Sidebar";
import Navbar from "../../organisms/navbar.jsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BurgerMenu from "../../organisms/Menu";

export default function MainLayout3({ children, date, title, option }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full font-inter bg-gray-200 md:mt-0 mt-16 ">
        <div className="flex justify-center items-center w-full">
          {sidebarVisible && (
            <div className="hidden md:flex justify-center w-[20%] h-screen">
              {/* sidebar */}
              <Sidebar />
            </div>
          )}
          <div className="md:hidden absolute top-0 w-full z-10">
            <BurgerMenu/>
          </div>
          <div className="hidden md:flex">
            <button onClick={toggleSidebar} className="md:focus:outline-none">
              {sidebarVisible ? <IoIosArrowBack size={20} /> : <IoIosArrowForward size={40} />}
            </button>
          </div>

          {/* content */}
          <div className="flex justify-center w-screen h-screen p-2">
            <div className="flex flex-col w-full bg-[#EEEEEE] rounded-xl shadow-lg">
              <div className="flex justify-between w-full border-b-2 px-8 py-4">
                <h1 className="text-gray-700 font-bold text-xl">{title}</h1>
                <div className="flex">
                  {option}

                </div>
              </div>
              <div className="flex flex-col justify-center md:px-8 md:py-4 p-2 overflow-y-auto">
                <div className="relative overflow-x-auto">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}