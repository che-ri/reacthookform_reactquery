import React from "react";
import { useForm } from "react-hook-form";
import {
    useQuery,
    useMutation,
    useQueryClient,
    useQueryErrorResetBoundary,
} from "react-query";
import { delEmp, editEmp, getEmp, postEmp } from "./api";

import UserForm from "./UserForm";
import List from "./List";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./ErrorFallBack";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

export default function Home() {
    const { reset } = useQueryErrorResetBoundary();
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
            <ErrorComponent />
            <UserForm
                register={register}
                handleSubmit={handleSubmit}
                handleAdd={handleAdd}
            />
            <React.Suspense
                fallback={
                    <Loader
                        type="react-query"
                        text="사원리스트를 불러오는 중입니다."
                    />
                }
            >
                <ErrorBoundary
                    onReset={reset}
                    fallbackRender={({ resetErrorBoundary }) => (
                        <ErrorFallBack
                            resetErrorBoundary={resetErrorBoundary}
                        />
                    )}
                >
                    <List
                        data={data}
                        handleEdit={handleEdit}
                        handleDel={handleDel}
                    />
                </ErrorBoundary>
            </React.Suspense>
        </div>
    );
}
