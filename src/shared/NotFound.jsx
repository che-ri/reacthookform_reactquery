import React from "react";
import Button from "./Button";
import Container from "./Container";
import Wrapper from "./Wrapper";

import img_notfound from "../asset/images/notfound.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/", { replace: true });
    }

    return (
        <Container>
            <Wrapper className="flex items-center justify-center">
                <div className="w-[50%] flex flex-col items-center">
                    <img src={img_notfound} className="w-[50%] mb-[30px]" />
                    <strong className="text-[25px] inline-block mb-[30px]">
                        요청하신 페이지를 찾을 수 없습니다.
                    </strong>
                    <p className="text-center text-[13px]">
                        찾으시려는 페이지의 주소가 잘못되었거나, <br />
                        페이지 주소가 변경 혹은 삭제로 인해 <br />
                        현재 사용하실 수 없습니다. <br />
                        입력하신 페이지의 주소가 정확한지
                        <br /> 다시 한번 확인해 주시기 바랍니다.
                    </p>
                    <Button
                        onClick={goHome}
                        className="py-[10px] px-[20px] text-[16px] m-auto mt-[50px] w-[50%] justify-center"
                    >
                        홈으로 돌아가기
                    </Button>
                </div>
            </Wrapper>
        </Container>
    );
}
