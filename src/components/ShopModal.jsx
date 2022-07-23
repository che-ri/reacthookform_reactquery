import React from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import RHFInput from "./RHFInput";

const temp = [
    { name: "펜", rhf_name: "pen", type: "number", unit: "개", price: 1000 },
    {
        name: "의자",
        rhf_name: "chair",
        type: "number",
        unit: "개",
        price: 50000,
    },
    {
        name: "책상",
        rhf_name: "desk",
        type: "number",
        unit: "개",
        price: 100000,
    },
];

export default function ShopModal({ is_open, closeModal }) {
    const { register } = useForm();
    const total_price_ref = React.useRef(0);
    let prices = [];

    function onChange(data) {
        const name = data.target.name;
        const quantity = Number(data.target.value);
        const target_price = temp.find((t) => t.rhf_name === name).price;
        const final_price = target_price * quantity;
        const find_idx = prices.findIndex((p) => p.name === name);

        //삭제
        if (quantity === 0) prices = prices.filter((p) => p.name !== name);
        //추가
        else if (quantity !== 0 && find_idx === -1)
            prices = [...prices, { name, final_price, quantity }];
        //수정
        else
            prices = prices.map((p) =>
                p.name === name ? { name, final_price, quantity } : p
            );

        total_price_ref.current.textContent = prices?.reduce(
            (acc, cur) => (acc += cur.final_price || 0),
            0
        );
    }

    return (
        <Modal is_open={is_open} closeModal={closeModal}>
            <h1 className="text-center text-[30px] mb-[20px]">Shop</h1>
            <div className="grid grid-cols-3 gap-[10px]">
                {temp.map((t) => (
                    <ShopBox {...t} register={register} onChange={onChange} />
                ))}
            </div>
            <div className="mt-[30px]">
                <h3 className="text-center bg-black text-white py-[5px] px-[10px">
                    합계
                </h3>
                <div className="text-center border border-black py-[5px] px-[10px]">
                    <span ref={total_price_ref}>0</span>
                    <span className="ml-[5px]">원</span>
                </div>
            </div>
        </Modal>
    );
}

function ShopBox({ rhf_name, name, type, price, unit, register, onChange }) {
    return (
        <div className="border border-black rounded p-[20px]">
            <div className="font-bold">{name}</div>
            <div>{price.toLocaleString()} 원</div>
            <div className="flex gap-[5px]">
                <RHFInput
                    name={rhf_name}
                    register={register}
                    onChange={onChange}
                    type={type}
                    className="w-full border-b border-black"
                />
                <span>{unit}</span>
            </div>
        </div>
    );
}
