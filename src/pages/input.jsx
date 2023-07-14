import React, { useState } from "react";
import InputPage from "./InputPage";
import InputOwnership from "./inputownership";
import InputCategory from "./inputcategory";
import InputLocation from "./inputlocation";
import MainLayout from "../components/templates/Main";
import InputStatus from "./inputstatus";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <MainLayout>
            <div>
                <div className="flex flex-row md:flex ml-5 md:font-semibold md:w-3/4">
                    <button
                        className={`md:px-2 md:py-4 w-16 md:w-36 text-xs md:text-[16px] flex justify-start items-center ${activeTab === 1 ? "bg-[#EEEEEE] border-2 border-black" : "bg-white"
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Input Barang
                    </button>
                    <button
                        className={`md:px-2 md:py-4 w-16 md:w-36 text-xs md:text-[16px] flex justify-start items-center  ${activeTab === 2 ? "bg-[#EEEEEE]  border-2 border-black" : "bg-white"
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Input Ownership
                    </button>
                    <button
                        className={`md:px-2 md:py-4 w-16 md:w-36 text-xs md:text-[16px] flex justify-start items-center ${activeTab === 3 ? "bg-[#EEEEEE]  border-2 border-black" : "bg-white"
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Input Category
                    </button>
                    <button
                        className={`md:px-2 md:py-4 w-16 md:w-36 text-xs md:text-[16px] flex justify-start items-center ${activeTab === 4 ? "bg-[#EEEEEE]  border-2 border-black" : "bg-white"
                            }`}
                        onClick={() => handleTabClick(4)}
                    >
                        Input Location
                    </button>
                    <button
                        className={`md:px-2 md:py-4 px-4 w-16 md:w-36 text-xs md:text-[16px] flex justify-start items-center ${activeTab === 5 ? "bg-[#EEEEEE]  border-2 border-black" : "bg-white"
                            }`}
                        onClick={() => handleTabClick(5)}
                    >
                        Input Status
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === 1 && <InputPage />}
                    {activeTab === 2 && <InputOwnership />}
                    {activeTab === 3 && <InputCategory />}
                    {activeTab === 4 && <InputLocation />}
                    {activeTab === 5 && <InputStatus />}
                </div>
            </div>
        </MainLayout>
    );
};

export default Tabs;
