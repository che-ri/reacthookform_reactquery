import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import RHFForm from "../../shared/RHFForm";
import RHFInput from "../../shared/RHFInput";
import RHFOption from "../../shared/RHFOption";
import RHFSelect from "../../shared/RHFSelect";

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
        <div className=" w-full relative">
            <div className="grid grid-cols-[1fr_1fr_1fr_2fr_2fr_2fr_2fr] gap-[20px] px-[20px] py-[10px] bg-black text-white">
                {header_temp.map((d) => (
                    <span key={`option-${d}`}>{d}</span>
                ))}
            </div>
            <div className="overflow-auto max-h-[50%]">
                {data?.data?.map((d, idx) => (
                    <Row
                        key={`list-${d.id}`}
                        data={d}
                        handleEdit={handleEdit}
                        handleDel={handleDel}
                    />
                ))}
            </div>
        </div>
    );
}

function Row({ data, handleEdit, handleDel }) {
    const navigate = useNavigate();
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

    function goDetail(id) {
        navigate(`/worker/detail/${id}`);
    }

    return (
        <div className="cursor-pointer" onClick={() => goDetail(data.id)}>
            {is_edit ? (
                <RHFForm
                    onSubmit={handleSubmit(edit)}
                    className="grid grid-cols-[1fr_1fr_1fr_2fr_2fr_2fr_2fr] items-center gap-x-[20px] bg-white px-[20px] py-[10px] border-b border-gray border-solid border-black"
                >
                    {temp.map((t, i) => (
                        <FormRow temp={t} register={register} />
                    ))}
                    <div className="flex gap-[10px]">
                        <Button onClick={handleSubmit(edit)}>수정</Button>
                        <Button onClick={handleCancel}>취소</Button>
                    </div>
                </RHFForm>
            ) : (
                <div className="grid grid-cols-[1fr_1fr_1fr_2fr_2fr_2fr_2fr] items-center gap-x-[20px] bg-white px-[20px] py-[10px] border-b border-gray border-solid border-black">
                    <span>{data.name}</span>
                    <span>{data.age}</span>
                    <span>{data.team}</span>
                    <span>{data.email}</span>
                    <span>{data.phone}</span>
                    <span>{data.date}</span>
                    <div className="flex gap-[10px] ">
                        <Button
                            onClick={() => {
                                clickEditBtn();
                            }}
                        >
                            수정
                        </Button>
                        <Button
                            onClick={() => {
                                handleDel(data.id);
                            }}
                        >
                            삭제
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

function FormRow({ temp, register, style }) {
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
            className="border-b border-solid border-black w-full"
            style={style}
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
