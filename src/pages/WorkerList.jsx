import React from "react";
import { useQueryErrorResetBoundary } from "react-query";

//components
import Index from "../components/Home";
import ErrorBoundary from "../shared/ErrorBoundary";
import Loader from "../shared/Loader";

export default function WorkerList() {
    const { reset } = useQueryErrorResetBoundary();

    return (
        <React.Suspense
            fallback={<Loader text="사원리스트를 불러오는 중입니다." />}
        >
            <ErrorBoundary reset={reset}>
                <Index />
            </ErrorBoundary>
        </React.Suspense>
    );
}
