import React from "react";
import { Link } from "react-router-dom";
import { GiPowerButton } from "react-icons/gi";

export default function Sidebar() {
  const handleNavigation = (route) => {
    window.location.href = route;
    console.log(route);
  };

  return (
    <>
      <div className="flex flex-col w-full bg-slate-400 shadow-lg">
        <div className="flex w-full px-4 py-8 space-x-2 flex-col">
          <h1 className="text-[30px] text-center font-bold uppercase ml-6">
            My Inventory
          </h1>
          <div className="flex flex-row justify-center gap-x-6 items-center mt-4">
            <img src="/image/ag-3.png" className="w-16 h-16 bg-cover"></img>
            <img src="/image/dg-3.svg" className="w-14 h-16"></img>
          </div>
        </div>
        <div className="flex flex-col w-full h-[70%] p-4 space-y-4 text-white">
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
          >
            Dashboard
          </Link>
          <Link
            to="/datapage"
            className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
          >
            Data Barang
          </Link>

          <Link
            to="/inputpage"
            className="px-4 py-2 rounded-md text-md font-medium border-b ease-in duration-300 hover:translate-x-6 w-full"
          >
            {" "}
            Input{" "}
          </Link>
        </div>

        <div className="flex justify-center items-center w-full px-8 pt-16 mb-10">
          <GiPowerButton className="text-[40px]" />
          <p className="text-[25px]">Log Out</p>
        </div>
      </div>
    </>
  );
}
