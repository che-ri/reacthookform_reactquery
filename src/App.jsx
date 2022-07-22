import React from "react";

import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

//components
import SuspenseFallBack from "./components/SuspenseFallBack";
import ErrorFallBack from "./components/ErrorFallBack";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";
import ShopOpenButton from "./components/ShopOpenButton";
import ShopModal from "./components/ShopModal";
const Home = React.lazy(() => import("./Home"));

export default function App() {
    const { reset } = useQueryErrorResetBoundary();
    const [calculator_open, setShopOpen] = React.useState(false);

    function closeShop() {
        setShopOpen(false);
    }

    function showShop() {
        setShopOpen(true);
    }
    return (
        <React.Suspense fallback={<SuspenseFallBack />}>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <Layout>
                    <div className="absolute right-[0px] flex gap-[20px] w-max h-max">
                        <ShopOpenButton showShop={showShop} />
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
                <ShopModal is_open={calculator_open} closeModal={closeShop} />
            </ErrorBoundary>
        </React.Suspense>
    );
}
