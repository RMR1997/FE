import React from "react";

export default function Button(props) {
    const { color = "bg-black", children, text = "text-black", size, type, onClick = () => { } } = props;

    return (
        <button
            type={type}
            onClick={onClick}
            className={`h-15 w-full py-1 font-semibold rounded-md hover:bg-sky-400 ${color} ${size} ${text}`}
        >
            {children}
        </button>
    )
}
