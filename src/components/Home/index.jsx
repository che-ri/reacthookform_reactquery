import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { delEmp, editEmp, getEmp } from "../../api";

//components
import Button from "../../shared/Button";
import ErrorComponent from "../../shared/ErrorComponent";
import List from "./List";
import Pagename from "../../shared/Pagename";

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
            <div className="flex w-full justify-between">
                <div className="flex gap-[10px]">
                    <ErrorComponent button_text="Home 에러발생버튼" />
                    <Button onClick={goWritePage}>사원 추가</Button>
                </div>
            </div>
            <List data={data} handleEdit={handleEdit} handleDel={handleDel} />
        </div>
    );
}
