import React from "react";

//components
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import Pagename from "./Pagename";

export default function ErrorFallBack({ error, error_info, reset }) {
    return (
        <Wrapper>
            <Pagename>에러가 발생했습니다.</Pagename>
            <table className="border border-black mt-[20px]">
                <thead className="bg-black text-white">
                    <tr>
                        <th>Error Log</th>
                    </tr>
                </thead>
                <tbody className="h-[50px]">
                    <tr>
                        <td>{error.message}</td>
                    </tr>
                    <tr>
                        <td>{error_info.componentStack}</td>
                    </tr>
                </tbody>
            </table>
            <Button
                className="bg-black rounded text-white px-[10px] py-[5px] mt-[20px]"
                onClick={reset}
            >
                홈으로 가기
            </Button>
        </Wrapper>
    );
}
