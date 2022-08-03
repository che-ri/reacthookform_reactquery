import React from "react";
import Button from "../shared/Button";

export default function ShopOpenButton({ showShop }) {
    return <Button onClick={showShop}>Shop</Button>;
}
