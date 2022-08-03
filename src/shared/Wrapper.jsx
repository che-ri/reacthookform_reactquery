import React from "react";

export default function Wrapper({ children, className, ...props }) {
    return (
        <div
            {...props}
            className={`h-[100%] max-w-[1000px] w-full relative m-auto relative ${className}`}
        >
            {children}
        </div>
    );
}
