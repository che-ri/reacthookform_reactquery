import React from "react";

//components
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import Pagename from "./Pagename";

export default function ErrorFallBack({ error, error_info, reset }) {
    return (
        <Wrapper>
            <Pagename name="에러가 발생했습니다." />
            <p className="text-[20px]">message : {error.message}</p>
            <p className="text-[20px]">name : {error.name}</p>
            <p className="text-[20px]">code : {error.code}</p>
            <div className="border border-black py-[10px] px-[20px] rounded mt-[10px]">
                <details>{error_info.componentStack}</details>
            </div>
            <Button
                className="bg-black rounded text-white px-[10px] py-[5px] mt-[20px]"
                onClick={reset}
            >
                돌아가기
            </Button>
        </Wrapper>
    );
}
