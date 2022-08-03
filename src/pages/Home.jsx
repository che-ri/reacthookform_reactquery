import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../shared/Wrapper";
import Container from "../shared/Container";
import img_notebook from "../asset/images/notebook.png";
import Button from "../shared/Button";

export default function Home() {
    const navigate = useNavigate();
    const img_ref = React.useRef();
    const welcome_brand_ref = React.useRef();
    const welcome_text_ref = React.useRef();
    const button_ref = React.useRef();

    React.useEffect(() => {
        //애니메이션 효과
        const img_timer = setTimeout(() => {
            img_ref.current.style.display = "inline";
        }, [500]);

        const welcome_text_timer = setTimeout(() => {
            welcome_text_ref.current.style.display = "inline";
        }, [1000]);

        const welcome_brand_timer = setTimeout(() => {
            welcome_brand_ref.current.style.display = "inline";
        }, [1500]);

        const button_timer = setTimeout(() => {
            console.log(button_ref.current.style);
            button_ref.current.style.display = "block";
        }, [2000]);

        return () => {
            clearTimeout(img_timer);
            clearTimeout(welcome_brand_timer);
            clearTimeout(welcome_text_timer);
            clearTimeout(button_timer);
        };
    }, []);

    function goList() {
        navigate("/worker");
    }

    return (
        <Container className="bg-[#313955]">
            <Wrapper>
                <div className="relative flex items-center h-full w-full overflow-hidden">
                    <div className="h-[250px]">
                        <h1 className="ml-[100px] text-[50px] text-white">
                            <span
                                ref={welcome_text_ref}
                                className="hidden animate-in fade-in duration-500 text-[30px]"
                            >
                                We make your own app
                            </span>
                            <br />
                            <span
                                ref={welcome_brand_ref}
                                className="hidden animate-in fade-in duration-500"
                            >
                                코드팩토리
                            </span>
                        </h1>
                        <Button
                            className="hidden py-[10px] px-[20px] mt-[50px] ml-[100px] animate-bounce fade-in  duration-800 hover:duration-0  "
                            ref={button_ref}
                            onClick={goList}
                        >
                            사원목록 바로가기
                        </Button>
                    </div>
                    <img
                        ref={img_ref}
                        src={img_notebook}
                        className="hidden animate-in duration-300 absolute right-[100px] -bottom-[50px] h-[680px] -scale-x-100"
                    />
                </div>
            </Wrapper>
        </Container>
    );
}
