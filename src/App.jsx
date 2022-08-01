import React from "react";

import { ErrorBoundary } from "react-error-boundary";

//components
import SuspenseFallBack from "./shared/SuspenseFallBack";
import ErrorFallBack from "./shared/ErrorFallBack";
import Layout from "./shared/Layout";
import ErrorComponent from "./shared/ErrorComponent";
import ShopOpenButton from "./components/ShopOpenButton";
import ShopModal from "./components/ShopModal";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    const [shop_open, setShopOpen] = React.useState(false);

    function closeShop() {
        setShopOpen(false);
    }

    function showShop() {
        setShopOpen(true);
    }
    return (
        <BrowserRouter>
            <React.Suspense fallback={<SuspenseFallBack />}>
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                    <Layout>
                        <div className="absolute right-[0px] flex gap-[20px] w-max h-max">
                            <ShopOpenButton showShop={showShop} />
                            <ErrorComponent button_text="Root 에러발생버튼" />
                        </div>

                        <Router />
                    </Layout>
                    <ShopModal is_open={shop_open} closeModal={closeShop} />
                </ErrorBoundary>
            </React.Suspense>
        </BrowserRouter>
    );
}
