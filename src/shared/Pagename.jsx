import React from "react";

export default function Pagename({ children, name, className }) {
    return (
        <div
            className={`text-[30px] font-bold mt-[50px] pb-[10px] mb-[30px] border-b border-gray ${className} `}
        >
            <h1>{name}</h1>
            {children}
        </div>
    );
}
