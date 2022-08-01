import React from "react";

export default function Button({ onClick, children, style }) {
    return (
        <button
            onClick={onClick}
            style={{
                ...style,
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
            className="h-max w-max bg-black text-white py-[5px] px-[10px] rounded flex items-center"
        >
            {children}
        </button>
    );
}
