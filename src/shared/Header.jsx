import React from "react";

import ErrorComponent from "./ErrorComponent";
import ShopOpenButton from "../components/ShopOpenButton";
import ShopModal from "../components/ShopModal";

export default function Header() {
    const [shop_open, setShopOpen] = React.useState(false);

    function showShop() {
        setShopOpen(true);
    }

    function closeShop() {
        setShopOpen(false);
    }
    return (
        <div className="flex gap-[10px]">
            <ErrorComponent button_text="Root 에러발생버튼" />
            <ShopOpenButton showShop={showShop} />
            <ShopModal is_open={shop_open} closeModal={closeShop} />
        </div>
    );
}
