import React from 'react';
import Login from '../../organisms/Login';
import { Link } from 'react-router-dom';

export default function AuthLayout(props) {
    const { children, title, desc, size} = props;
    return (
        <>
            <div className="flex justify-end items-center max-w-screen bg-white bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 rounded-lg p-1" >
                <div className="flex p-1 rounded-lg bg-white">
                    <div className="flex flex-row justify-center place-items-center mt-12">
                        <img src="/image/ag-1.png" className="w-60 h-60"></img>
                        <img src="/image/gs.png" className="w-60 h-60"></img>
                    </div>
                    <div className={`${size} p-8`}>
                        <h1 className="text-3xl font-bold text-center mb-2 text-blue-600">{title}</h1>
                        <p className="text-center text-2xl font-medium text-slate-900 mb-4">{desc}</p>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
