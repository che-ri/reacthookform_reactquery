import React from "react";

import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

//components
import SuspenseFallBack from "./components/SuspenseFallBack";
import ErrorFallBack from "./components/ErrorFallBack";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";
import CalculatorShowButton from "./components/CalculatorAddButton";
import CalculatorModal from "./components/CalculatorModal";
const Home = React.lazy(() => import("./Home"));

export default function App() {
    const { reset } = useQueryErrorResetBoundary();
    const [calculator_open, setCalculatorOpen] = React.useState(false);

    function closeCalculator() {
        setCalculatorOpen(false);
    }

    function showCalculator() {
        setCalculatorOpen(true);
    }
    return (
        <React.Suspense fallback={<SuspenseFallBack />}>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <Layout>
                    <div className="absolute right-[0px] flex gap-[20px] w-max h-max">
                        <CalculatorShowButton showCalculator={showCalculator} />
                        <ErrorComponent button_text="Root 에러발생버튼" />
                    </div>
                    <React.Suspense
                        fallback={
                            <Loader text="사원리스트를 불러오는 중입니다." />
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
                            <Home />
                        </ErrorBoundary>
                    </React.Suspense>
                </Layout>
                <CalculatorModal
                    is_open={calculator_open}
                    closeModal={closeCalculator}
                />
            </ErrorBoundary>
        </React.Suspense>
    );
}
