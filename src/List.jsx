import React from "react";
import { useForm } from "react-hook-form";

export default function List({ data, handleEdit, handleDel }) {
    return (
        <div className="max-h-[40%] overflow-auto w-full">
            <h1 className="text-[30px] font-bold mb-[10px]">사원 리스트</h1>
            <div className="grid grid-cols-4 gap-[20px] px-[20px] py-[10px] bg-black text-white">
                {["이름", "나이", "부서", ""].map((d) => (
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

    function clickEditBtn() {
        setIsEdit(true);
    }

    function handleCancel() {
        setIsEdit(false);
        reset();
    }

    function edit(form) {
        const { name, team, age } = form;
        handleEdit({ id: data.id, name, team, age });
        reset();
        setIsEdit(false);
    }
    return (
        <>
            {is_edit ? (
                <form
                    onSubmit={handleSubmit(edit)}
                    className="grid grid-cols-4  gap-x-[20px] bg-[#f1f1f1] px-[20px] py-[10px] border-b border-[#d9d9d9] border-solid border-black"
                >
                    <input
                        className="border-b border-solid border-black bg-transparent"
                        {...register("name")}
                        name="name"
                        autoFocus
                        defaultValue={data.name}
                    />
                    <input
                        className="border-b border-solid border-black bg-transparent"
                        {...register("age")}
                        type="number"
                        name="age"
                        defaultValue={data.age}
                        autoFocus
                    />
                    <select
                        className="w-full bg-transparent"
                        defaultValue={data.team}
                        {...register("team")}
                    >
                        {["관리", "영업", "회계"].map((d) => (
                            <option key={`option-${d}`}>{d}</option>
                        ))}
                    </select>
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
                </form>
            ) : (
                <div className="grid grid-cols-4 gap-x-[20px] bg-[#f1f1f1] px-[20px] py-[10px] border-b border-[#d9d9d9] border-solid border-black">
                    <span>{data.name}</span>
                    <span>{data.age}</span>
                    <span>{data.team}</span>
                    <div className="w-full flex justify-center gap-[10px]">
                        <button
                            className="bg-black text-white rounded px-[10px]"
                            onClick={() => {
                                clickEditBtn();
                            }}
                        >
                            수정
                        </button>
                        <button
                            className="bg-black text-white rounded px-[10px]"
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
