import React from "react";
import Icons from "../../atoms/icons";

const InfoBox = ({ title, count, color }) => {
  return (
    <div
      className={`flex flex-row justify-between px-4  ${color} md:w-80 md:h-48 w-60 border rounded-lg`}
    >
      <div className="w-full text-center mt-6 ">
        <div className="">
          <h1 className="text-gray-700 text-3xl mt-4 font-poppins">{title}</h1>
        </div>
        <p className="text-slate-500 text-center text-2xl p-4 font-bold">{count}</p>
      </div>
      <div className="md:mr-4 md:mt-8 mt-16">
        {title === "Jumlah Barang" && <Icons.box height="65px" width="75px" />}
        {title === "Total Asset" && <Icons.box height="65px" width="75px" />}
        {title === "Kategori Barang" && <Icons.box height="65px" width="75px" />}
        {/* {title === "Furniture" && <Icons.furniture height="85px" width="75px" />}
        {title === "Elektronik" && <Icons.elektronik height="85px" width="75px" />}
        {title === "Stok Barang" && <Icons.atk height="85px" width="75px" />} */}
      </div>
    </div>
  );
};

export default InfoBox;