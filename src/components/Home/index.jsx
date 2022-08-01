import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { delEmp, editEmp, getEmp } from "../../api";
import ErrorComponent from "../../shared/ErrorComponent";
import List from "./List";

export default function Index() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { data } = useQuery("emp", getEmp, {
        suspense: true,
    });

    const _delEmp = useMutation(delEmp, {
        onMutate: ({ id }) => {
            return { id };
        },
        onSuccess: () => {
            queryClient.invalidateQueries("emp");
        },
    });

    const _editEmp = useMutation(editEmp, {
        onMutate: ({ id, name, age, team, email, phone, date }) => {
            return { id, name, age, team, email, phone, date };
        },
        onSuccess: () => {
            queryClient.invalidateQueries("emp");
        },
    });

    function handleEdit({ id, name, age, team, email, phone, date }) {
        _editEmp.mutate({ id, name, team, age, email, phone, date });
    }

    function handleDel(id) {
        _delEmp.mutate({ id });
    }

    function goWritePage() {
        navigate("/worker/write");
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <ErrorComponent button_text="Home 에러발생버튼" />
            <div className="flex w-full justify-end">
                <button
                    onClick={goWritePage}
                    className="h-max w-max bg-black text-white py-[5px] px-[10px] rounded"
                >
                    사원 추가
                </button>
            </div>
            <List data={data} handleEdit={handleEdit} handleDel={handleDel} />
        </div>
    );
}
