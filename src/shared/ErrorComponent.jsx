import React from "react";
import Bomb from "./Bomb";
import Button from "./Button";

export default function ErrorComponent({ button_text = "" }) {
    const [error, setError] = React.useState(false);
    function onClickError() {
        setError(!error);
    }
    return (
        <div>
            <Button
                className="bg-black px-[10px] py-[5px] text-white rounded"
                onClick={onClickError}
            >
                {button_text}
            </Button>
            {error && <Bomb />}
        </div>
    );
}
