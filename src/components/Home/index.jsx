import React from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { delEmp, editEmp, getEmp } from "../../api";

//components
import Button from "../../shared/Button";
import List from "./List";
import Pagename from "../../shared/Pagename";
import Wrapper from "../../shared/Wrapper";
import Container from "../../shared/Container";

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
            toast.info("사원정보가 삭제되었습니다.");
        },
    });

    const _editEmp = useMutation(editEmp, {
        onMutate: ({ id, name, age, team, email, phone, date }) => {
            return { id, name, age, team, email, phone, date };
        },
        onSuccess: () => {
            queryClient.invalidateQueries("emp");
            toast.info("사원정보가 수정되었습니다.");
        },
    });

    function handleEdit({ id, name, age, team, email, phone, date }) {
        _editEmp.mutate({ id, name, team, age, email, phone, date });
    }

    function handleDel(id) {
        Swal.fire({
            title: "정말로 삭제하시겠습니까?",
            text: "삭제하면 되돌릴 수 없습니다.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "네",
            cancelButtonText: "아니요",
        }).then((result) => {
            if (result.isConfirmed) {
                _delEmp.mutate({ id });
            }
        });
        return;
    }

    function goWritePage() {
        navigate("/worker/write/add");
    }

    return (
        <Container>
            <Wrapper className="h-[calc(100%-50px)]">
                <Pagename
                    className="flex justify-between items-center"
                    name="사원 목록"
                >
                    <Button className="text-[15px]" onClick={goWritePage}>
                        사원 추가
                    </Button>
                </Pagename>
                <List
                    data={data}
                    handleEdit={handleEdit}
                    handleDel={handleDel}
                />
            </Wrapper>
        </Container>
    );
}
