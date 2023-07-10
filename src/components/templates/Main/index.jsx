import React, { useState } from "react";
import Sidebar from "../../organisms/Sidebar";
import Navbar from "../../organisms/navbar.jsx";

export default function MainLayout({ children, date, title }) {
  return (
    <>
      <div className="flex justify-center items-center w-full font-inter bg-gray-200 ">
        <div className="flex justify-center items-center w-full">
          <div className="flex justify-center w-[20%] h-screen">
            {/* sidebar */}
            <Sidebar />
          </div>

          {/* content */}
          <div className="flex justify-center w-full h-screen p-4">
            <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
              <div className="flex justify-between w-full border-b-2 px-8 py-4">
                <h1 className="text-gray-700 font-bold text-xl">{title}</h1>
                {date}
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
