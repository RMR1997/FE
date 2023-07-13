import React from "react";


export default function AuthLogo() {

    return (
        <>
            <div className="flex justify-center items-center md:max-w-screen h-[130px] md:h-[400px] bg-black rounded-b-full absolute top-2 left-2 z-10 md:absolute  md:top-0  md:ml-40">
                <div className="bg-black flex flex-col justify-center items-center rounded-b-full">
                    <img src="/image/dg0.svg" className="w-8 md:w-32 md:mt-10 "></img>
                    <img src="/image/ag0.svg" className="w-16 md:w-48 p-4 md:p-8 "></img>
                </div>
            </div>
        </>
    );
}