import React from "react";
import { useNavigate } from "react-router-dom";

//components
import ErrorComponent from "./ErrorComponent";
import ShopOpenButton from "../components/ShopOpenButton";
import ShopModal from "../components/ShopModal";

export default function Header() {
    const navigate = useNavigate();
    const [shop_open, setShopOpen] = React.useState(false);

    function showShop() {
        setShopOpen(true);
    }

    function closeShop() {
        setShopOpen(false);
    }

    function goHome() {
        navigate("/");
    }
    return (
        <div
            className="py-[10px] px-[10px] mb-[15px] border-b border-[#f9f9f9] w-full flex justify-center"
            style={{
                boxShadow: "rgba(33, 35, 38, 0.3) 0px 10px 10px -10px",
            }}
        >
            <div className="flex justify-between items-center min-w-[1000px] max-w-[1000px] ">
                <a
                    className="text-[20px] cursor-pointer"
                    type="button"
                    onClick={goHome}
                >
                    Factory
                </a>
                <div className="flex gap-[10px]">
                    <ErrorComponent button_text="Root 에러발생버튼" />
                    <ShopOpenButton showShop={showShop} />
                </div>
            </div>
            <ShopModal is_open={shop_open} closeModal={closeShop} />
        </div>
    );
}
