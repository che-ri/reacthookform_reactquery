import React from "react";
import { useForm } from "react-hook-form";
import RHFForm from "./RHFForm";
import RHFInput from "./RHFInput";
import RHFOption from "./RHFOption";
import RHFSelect from "./RHFSelect";

export default function List({ data, handleEdit, handleDel }) {
    const header_temp = [
        "이름",
        "나이",
        "부서",
        "이메일",
        "핸드폰",
        "등록일",
        "",
    ];

    return (
        <div className=" w-full">
            <h1 className="text-[30px] font-bold mb-[10px]">사원 리스트</h1>
            <div className="grid grid-cols-7 gap-[20px] px-[20px] py-[10px] bg-black text-white">
                {header_temp.map((d) => (
                    <span key={`option-${d}`}>{d}</span>
                ))}
            </div>
            {data?.data?.map((d, idx) => (
                <Row
                    key={`list-${d.id}`}
                    data={d}
                    handleEdit={handleEdit}
                    handleDel={handleDel}
                />
            ))}
        </div>
    );
}

function Row({ data, handleEdit, handleDel }) {
    const [is_edit, setIsEdit] = React.useState(false);
    const { register, handleSubmit, reset } = useForm();

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
            defaultValue: data.name,
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
            defaultValue: data.age,
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
            defaultValue: data.team,
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
            defaultValue: data.email,
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
            defaultValue: data.phone,
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
            defaultValue: data.date,
        },
    ];

    function clickEditBtn() {
        setIsEdit(true);
    }

    function handleCancel() {
        setIsEdit(false);
        reset();
    }

    function edit(form) {
        const { name, team, age, email, phone, date } = form;
        handleEdit({ id: data.id, name, team, age, email, phone, date });
        reset();
        setIsEdit(false);
    }

    return (
        <>
            {is_edit ? (
                <RHFForm
                    onSubmit={handleSubmit(edit)}
                    className="grid grid-cols-7  gap-x-[20px] bg-[#f1f1f1] px-[20px] py-[10px] border-b border-[#d9d9d9] border-solid border-black"
                >
                    {temp.map((t) => (
                        <FormRow temp={t} register={register} />
                    ))}
                    <div className="flex gap-[10px]">
                        <button
                            className="bg-black text-white w-full p-[10px] rounded"
                            onClick={handleSubmit(edit)}
                        >
                            수정
                        </button>
                        <button
                            className="bg-black text-white w-full p-[10px] rounded"
                            onClick={handleCancel}
                        >
                            취소
                        </button>
                    </div>
                </RHFForm>
            ) : (
                <div className="grid grid-cols-7 gap-x-[20px] bg-[#f1f1f1] px-[20px] py-[10px] border-b border-[#d9d9d9] border-solid border-black">
                    <span>{data.name}</span>
                    <span>{data.age}</span>
                    <span>{data.team}</span>
                    <span>{data.email}</span>
                    <span>{data.phone}</span>
                    <span>{data.date}</span>
                    <div className="w-full flex justify-center items-center gap-[10px] ">
                        <button
                            className="bg-black text-white rounded px-[10px] h-max"
                            onClick={() => {
                                clickEditBtn();
                            }}
                        >
                            수정
                        </button>
                        <button
                            className="bg-black text-white rounded px-[10px] h-max"
                            onClick={() => {
                                handleDel(data.id);
                            }}
                        >
                            삭제
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

function FormRow({ temp, register }) {
    const { rhf_name, type, list, rules, placeholder, defaultValue } = temp;

    if (type === "select")
        return (
            <RHFSelect
                className="w-full"
                register={register}
                name={rhf_name}
                rules={rules}
                autoFocus
                defaultValue={defaultValue}
            >
                {list.map((d) => (
                    <RHFOption key={`option-${d}`}>{d}</RHFOption>
                ))}
            </RHFSelect>
        );

    return (
        <RHFInput
            className="border-b border-solid border-black ml-[10px]"
            register={register}
            name={rhf_name}
            rules={rules}
            type={type}
            placeholder={placeholder}
            autoFocus
            defaultValue={defaultValue}
        />
    );
}
