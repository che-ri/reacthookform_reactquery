import React from "react";

import ErrorComponent from "./ErrorComponent";
import ShopOpenButton from "../components/ShopOpenButton";
import ShopModal from "../components/ShopModal";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
            className="flex justify-between items-center pb-[10px] px-[10px] mb-[20px] border-b border-[#f9f9f9] "
            style={{
                boxShadow: "rgba(33, 35, 38, 0.3) 0px 10px 10px -10px",
            }}
        >
            <Button onClick={goHome}>Home</Button>
            <div className="flex gap-[10px]">
                <ErrorComponent button_text="Root 에러발생버튼" />
                <ShopOpenButton showShop={showShop} />
            </div>
            <ShopModal is_open={shop_open} closeModal={closeShop} />
        </div>
    );
}
