import React from 'react';
import Login from '../../organisms/Login';
import { Link } from 'react-router-dom';

export default function AuthLayout(props) {
    const { children, title, desc, size } = props;
    return (
        <>
            <div className="flex justify-end items-center max-w-screen bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 rounded-lg p-1" >
                <div className="flex p-1 rounded-lg bg-white">
                    <div className={`${size} p-8`}>
                        <h1 className="text-4xl font-bold text-center mb-12 text-black">{title}</h1>
                        <img className='w-full' src="public/image/logo.png" alt="image" />
                        <p className="text-center text-2xl font-medium text-slate-900 mb-4">{desc}</p>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}