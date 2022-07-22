import React from "react";

export default function CalculatorShowButton({ showCalculator }) {
    return (
        <div>
            <button
                onClick={showCalculator}
                className="bg-black px-[10px] py-[5px] text-white w-max h-max"
            >
                계산기
            </button>
        </div>
    );
}
