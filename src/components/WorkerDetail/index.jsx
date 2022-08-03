import React from "react";
import Container from "../../shared/Container";
import Pagename from "../../shared/Pagename";
import Wrapper from "../../shared/Wrapper";
import WorkerTable from "./WorkerTable";

export default function Index() {
    const data = {};

    return (
        <Container>
            <Wrapper className="h-[calc(100%-50px)]">
                <Pagename name="사원 정보" />
                <WorkerTable data={data} />
            </Wrapper>
        </Container>
    );
}
