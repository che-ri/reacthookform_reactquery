import React from "react";

export default function Content({ children }) {
    return (
        <div className="h-[100%] max-w-[1000px] w-full relative">
            {children}
        </div>
    );
}
