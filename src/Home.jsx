import React from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { delEmp, editEmp, getEmp, postEmp } from "./api";

//components
import UserForm from "./components/UserForm";
import List from "./components/List";
import ErrorComponent from "./components/ErrorComponent";

export default function Home() {
    const queryClient = useQueryClient();
    const { data } = useQuery("emp", getEmp, {
        suspense: true,
    });

    const { register, handleSubmit } = useForm();

    const _addEmp = useMutation(postEmp, {
        onMutate: ({ name, age, team, email, phone, date }) => {
            return { name, age, team, email, phone, date };
        },
        onSuccess: () => {
            queryClient.invalidateQueries("emp");
        },
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

    function handleAdd({ name, age, team, email, phone, date }) {
        _addEmp.mutate({ name, age, team, email, phone, date });
    }
    function handleEdit({ id, name, age, team, email, phone, date }) {
        _editEmp.mutate({ id, name, team, age, email, phone, date });
    }

    function handleDel(id) {
        _delEmp.mutate({ id });
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <ErrorComponent button_text="Home 에러발생버튼" />
            <UserForm
                register={register}
                handleSubmit={handleSubmit}
                handleAdd={handleAdd}
            />

            <List data={data} handleEdit={handleEdit} handleDel={handleDel} />
        </div>
    );
}
