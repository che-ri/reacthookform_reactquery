import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useQueryErrorResetBoundary } from "react-query";

//components
import Index from "../components/Home";
import ErrorFallBack from "../shared/ErrorFallBack";
import Loader from "../shared/Loader";

export default function WorkerList() {
    const { reset } = useQueryErrorResetBoundary();

    return (
        <React.Suspense
            fallback={<Loader text="사원리스트를 불러오는 중입니다." />}
        >
            <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary }) => (
                    <ErrorFallBack resetErrorBoundary={resetErrorBoundary} />
                )}
            >
                <Index />
            </ErrorBoundary>
        </React.Suspense>
    );
}
