import React from "react";

export default function ShopOpenButton({ showShop }) {
    return (
        <div>
            <button
                onClick={showShop}
                className="bg-black px-[10px] py-[5px] text-white w-max h-max rounded"
            >
                Shop
            </button>
        </div>
    );
}
