import React from "react";
import RHFInput from "../shared/RHFInput";
import RHFOption from "../shared/RHFOption";
import RHFSelect from "../shared/RHFSelect";

const temp = [
    {
        name: "이름",
        rhf_name: "name",
        type: "text",
        rules: {
            required: true,
            maxLength: 5,
        },
        placeholder: null,
        list: [],
    },
    {
        name: "나이",
        rhf_name: "age",
        type: "number",
        rules: {
            required: true,
            maxLength: 5,
        },
        placeholder: null,
        list: [],
    },
    {
        name: "부서",
        rhf_name: "team",
        type: "select",
        rules: {
            required: true,
        },
        placeholder: null,
        list: ["관리", "영업", "회계"],
    },
    {
        name: "이메일",
        rhf_name: "email",
        type: "email",
        rules: {
            required: true,
        },
        placeholder: "aaa@aaa.com",
        list: [],
    },
    {
        name: "전화번호",
        rhf_name: "phone",
        type: "phone",
        rules: {
            required: true,
        },
        placeholder: "000-0000-0000",
        list: [],
    },
    {
        name: "등록일",
        rhf_name: "date",
        type: "date",
        rules: {
            required: true,
        },
        placeholder: "0000-00-00",
        list: [],
    },
];

export default function UserForm({ register }) {
    return (
        <div className="w-full pb-[30px]">
            {temp.map((t, i) => (
                <FormRow key={`user_form-${i}`} temp={t} register={register} />
            ))}
        </div>
    );
}

function FormRow({ temp, register }) {
    const { name, rhf_name, type, list, rules, placeholder } = temp;

    if (type === "select")
        return (
            <div className="mb-[10px] grid grid-cols-[.5fr_2fr]">
                <strong>{name}</strong>
                <RHFSelect
                    className="w-full"
                    register={register}
                    name={rhf_name}
                    rules={rules}
                    autoFocus
                >
                    {list.map((d) => (
                        <RHFOption key={`option-${d}`}>{d}</RHFOption>
                    ))}
                </RHFSelect>
            </div>
        );

    return (
        <div className="mb-[10px] grid grid-cols-[.5fr_2fr]">
            <strong>{name}</strong>
            <RHFInput
                className="border-b border-solid border-black ml-[10px]"
                register={register}
                name={rhf_name}
                rules={rules}
                type={type}
                placeholder={placeholder}
                autoFocus
            />
        </div>
    );
}
