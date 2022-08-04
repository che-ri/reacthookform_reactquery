import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getEmp } from "../../api";

//components
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Pagename from "../../shared/Pagename";
import Wrapper from "../../shared/Wrapper";
import WorkerTable from "./WorkerTable";

export default function Index() {
    const {
        data: { data: list },
    } = useQuery("emp", getEmp, {
        suspense: true,
    });
    const navigate = useNavigate();

    const { id } = useParams();

    const data = list.find((d) => d.id == id) || {};

    function goBack() {
        navigate("/worker");
    }

    return (
        <Container>
            <Wrapper className="h-[calc(100%-50px)]">
                <Pagename
                    name="사원 정보"
                    className="flex justify-between items-center"
                >
                    <Button className="text-[15px]" onClick={goBack}>
                        뒤로가기
                    </Button>
                </Pagename>
                <WorkerTable data={data} />
            </Wrapper>
        </Container>
    );
}
