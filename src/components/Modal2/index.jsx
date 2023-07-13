import React from "react";

export default function Modal(props) {
  const { children, title, type } = props;
  return (
    <>
      {type === "main" ? (
        <div className="flex justify-center items-center fixed md:inset-0 h-modal md:h-full bg-[#0085FF] bg-opacity-[7%] backdrop-blur-sm z-20">
          <div className="bg-white rounded-lg w-[32%] h-fit shadow-md">
            <div className="flex justify-start items-start border-b w-full px-6 py-4">
              <h1 className="text-md font-medium">{title}</h1>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full p-5">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center fixed md:inset-0 h-modal md:h-full bg-[#0085FF] bg-opacity-[7%] backdrop-blur-sm z-20">
          <div className="bg-[#F8F1F1] rounded-lg w-[32%] h-[90%] shadow-md">
            <div className="flex justify-start items-start border-b w-full px-6 py-4">
              <h1 className="text-md font-medium">{title}</h1>
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full p-5">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
