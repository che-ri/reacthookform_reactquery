import React from "react";

export default function UserForm({ register, handleSubmit, handleAdd }) {
    return (
        <form onSubmit={handleSubmit(handleAdd)} className="w-full pb-[30px]">
            <div className="mb-[10px] grid grid-cols-[.5fr_2fr] w-full">
                <span>이름</span>
                <input
                    className="border-b border-solid border-black ml-[10px]"
                    {...register("name")}
                    name="name"
                    autoFocus
                />
            </div>
            <div className="mb-[10px] grid grid-cols-[.5fr_2fr]">
                <span>나이</span>
                <input
                    className="border-b border-solid border-black ml-[10px]"
                    {...register("age")}
                    type="number"
                    name="age"
                    autoFocus
                />
            </div>
            <div className="mb-[10px] grid grid-cols-[.5fr_2fr]">
                <span className="w-full">부서</span>
                <select className="w-full" {...register("team")}>
                    {["관리", "영업", "회계"].map((d) => (
                        <option key={`option-${d}`}>{d}</option>
                    ))}
                </select>
            </div>
            <button className="bg-black text-white w-full p-[10px] rounded">
                입력
            </button>
        </form>
    );
}
