import React, { useState } from 'react';

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const renderContent = (content) => {
        return (
            <div className='p-6 bg-gray-800 rounded-lg shadow-lg mt-2 border border-gray-700'>
                <h2 className='text-2xl font-semibold mb-3 text-indigo-300'>{content.title}</h2>
                <p className='text-gray-300'>{content.description}</p>
            </div>
        );
    }
    return (
        <div className='max-w-2xl mx-auto'>
            <div className='flex flex-wrap border-b border-gray-700'>
                {tabs.map((tab, index) => (
                    <button className={`py-3 px-6 focus:outline-none font-medium text-sm duration-300 transition-colors cursor-pointer
                    ${activeTab === index ? "border-b-2 border-indigo-500 text-indigo-400 bg-gray-800 bg-opacity-50" :
                            "text-gray-400 hover:text-indigo-300 hover:bg-gray-800 hover:bg-opacity-30"}`}
                        key={index} onClick={() => setActiveTab(index)}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='mt-1'>
                {renderContent(tabs[activeTab].content)}
            </div>

        </div>
    );
};

export default Tab;