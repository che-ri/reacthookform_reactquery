import React from "react";

export default function Container({ children, className = "", ...props }) {
    return (
        <div className={`w-full h-full pt-[15px] ${className}`} {...props}>
            {children}
        </div>
    );
}
