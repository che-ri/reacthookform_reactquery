import React from "react";
import Bomb from "./Bomb";

export default function ErrorComponent() {
    const [error, setError] = React.useState(false);
    function onClickError() {
        setError(!error);
    }
    return (
        <div className="flex justify-start w-full mb-[50px]">
            <button
                className="bg-black px-[10px] py-[5px] text-white"
                onClick={onClickError}
            >
                에러 발생
            </button>
            {error && <Bomb />}
        </div>
    );
}
