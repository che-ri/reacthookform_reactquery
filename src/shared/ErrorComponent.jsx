import React from "react";
import Bomb from "./Bomb";

export default function ErrorComponent({ button_text = "" }) {
    const [error, setError] = React.useState(false);
    function onClickError() {
        setError(!error);
    }
    return (
        <div className="flex justify-start w-full mb-[50px]">
            <button
                className="bg-black px-[10px] py-[5px] text-white rounded"
                onClick={onClickError}
            >
                {button_text}
            </button>
            {error && <Bomb />}
        </div>
    );
}
