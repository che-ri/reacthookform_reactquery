import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { postEmp } from "../api";
import { toast } from "react-toastify";

//components
import RHFForm from "../shared/RHFForm";
import UserForm from "../components/UserForm";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Pagename from "../shared/Pagename";
import Wrapper from "../shared/Wrapper";

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
            toast.info("사원이 추가되었습니다.");
            navigate("/worker");
        },
    });
    function handleAdd({ name, age, team, email, phone, date }) {
        _addEmp.mutate({ name, age, team, email, phone, date });
    }

    function goBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Wrapper className="h-[calc(100%-50px)]">
                <RHFForm
                    onSubmit={handleSubmit(handleAdd)}
                    className="w-full pb-[30px]"
                >
                    <Pagename
                        className="flex justify-between items-center"
                        name="사원정보 작성"
                    >
                        <div className="flex gap-[10px]">
                            <Button className="text-[15px]" onClick={goBack}>
                                돌아가기
                            </Button>
                            <Button
                                type="submit"
                                className="text-[15px]"
                                onClick={handleSubmit(handleAdd)}
                            >
                                저장
                            </Button>
                        </div>
                    </Pagename>
                    <UserForm
                        register={register}
                        handleSubmit={handleSubmit}
                        handleAdd={handleAdd}
                    />
                </RHFForm>
            </Wrapper>
        </Container>
    );
}
