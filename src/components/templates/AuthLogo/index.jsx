import React from "react";


export default function AuthLogo() {

    return (
        <>
            <div className="flex justify-end items-center max-w-screen h-[400px] bg-black rounded-b-full absolute top-0 ml-40">
                <div className="bg-black flex flex-col justify-center items-center rounded-b-full">
                    <img src="/image/dg0.svg" className="w-32 "></img>
                    <img src="/image/ag0.svg" className="w-48 p-8 "></img>
                </div>
            </div>
        </>
    );
}