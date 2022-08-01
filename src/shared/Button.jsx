import React from "react";

export default function Button({ onClick, children }) {
    return (
        <button
            onClick={onClick}
            className="h-max w-max bg-black text-white py-[5px] px-[10px] rounded"
        >
            {children}
        </button>
    );
}
