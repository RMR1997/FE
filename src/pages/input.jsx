import React, { useState } from 'react';
import InputPage from './InputPage';
import InputOwnership from './inputownership';
import InputCategory from './inputcategory';
import InputLocation from './inputlocation';
import MainLayout from '../components/templates/Main';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <MainLayout>
            <div>
                <div className="flex ">
                    <button
                        className={`px-4 py-2 ${activeTab === 1 ? 'bg-white' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Input Barang
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 2 ? 'bg-white' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Input Ownership
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 3 ? 'bg-white' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Input Category
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 4 ? 'bg-white' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(4)}
                    >
                        Input Location
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === 1 && <InputPage />}
                    {activeTab === 2 && <InputOwnership />}
                    {activeTab === 3 && <InputCategory />}
                    {activeTab === 4 && <InputLocation />}
                </div>
            </div>
        </MainLayout>
    );
};

export default Tabs;
