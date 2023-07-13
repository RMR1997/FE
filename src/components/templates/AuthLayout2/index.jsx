import React from 'react';
import Login from '../../organisms/Login';
import { Link } from 'react-router-dom';

export default function AuthLayout2(props) {
    const { children, title, desc, size } = props;
    return (
        <>

            <div className={`${size} w-1/2 h-full `}>
                <img className='w-full' src="public/image/logo.png" alt="image" />
                <p className="text-center text-2xl font-medium text-slate-900 mb-4">{desc}</p>
                {children}
            </div>


        </>
    );
}