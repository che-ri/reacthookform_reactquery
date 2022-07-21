import React from "react";
import RHFForm from "./RHFForm";
import RHFInput from "./RHFInput";
import RHFOption from "./RHFOption";
import RHFSelect from "./RHFSelect";

const temp = [
    { name: "이름", rhf_name: "name", type: "text", list: [] },
    { name: "나이", rhf_name: "age", type: "number", list: [] },
    {
        name: "부서",
        rhf_name: "team",
        type: "select",
        list: ["관리", "영업", "회계"],
    },
];

export default function UserForm({ register, handleSubmit, handleAdd }) {
    return (
        <RHFForm
            onSubmit={handleSubmit(handleAdd)}
            className="w-full pb-[30px]"
        >
            {temp.map((t, i) => (
                <FormRow key={`user_form-${i}`} temp={t} register={register} />
            ))}
            <button className="bg-black text-white w-full p-[10px] rounded">
                입력
            </button>
        </RHFForm>
    );
}

function FormRow({ temp, register }) {
    const { name, rhf_name, type, list } = temp;

    if (type === "select")
        return (
            <div className="mb-[10px] grid grid-cols-[.5fr_2fr]">
                <span>{name}</span>
                <RHFSelect
                    className="w-full"
                    register={register}
                    name={rhf_name}
                >
                    {list.map((d) => (
                        <RHFOption key={`option-${d}`}>{d}</RHFOption>
                    ))}
                </RHFSelect>
            </div>
        );

    return (
        <div className="mb-[10px] grid grid-cols-[.5fr_2fr]">
            <span>{name}</span>
            <RHFInput
                className="border-b border-solid border-black ml-[10px]"
                register={register}
                name={rhf_name}
                autoFocus
            />
        </div>
    );
}
