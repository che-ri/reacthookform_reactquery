import React from "react";

export default function Pagename({ children, className }) {
    return (
        <h1
            className={`text-[30px] font-bold mt-[50px] pb-[10px] mb-[30px] border-b border-gray ${className} `}
        >
            {children}
        </h1>
    );
}
