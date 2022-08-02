import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { postEmp } from "../api";

//components
import UserForm from "../components/UserForm";
import Pagename from "../shared/Pagename";

export default function WorkerWrite() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const _addEmp = useMutation(postEmp, {
        onMutate: ({ name, age, team, email, phone, date }) => {
            return { name, age, team, email, phone, date };
        },
        onSuccess: () => {
            queryClient.invalidateQueries("emp");
            navigate("/");
        },
    });
    function handleAdd({ name, age, team, email, phone, date }) {
        _addEmp.mutate({ name, age, team, email, phone, date });
    }
    return (
        <div>
            <Pagename>사원 추가</Pagename>
            <UserForm
                register={register}
                handleSubmit={handleSubmit}
                handleAdd={handleAdd}
            />
        </div>
    );
}
