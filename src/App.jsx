import React from "react";

import { ErrorBoundary } from "react-error-boundary";

//components
import SuspenseFallBack from "./shared/SuspenseFallBack";
import ErrorFallBack from "./shared/ErrorFallBack";
import Layout from "./shared/Layout";

import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<SuspenseFallBack />}>
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                    <Layout>
                        <Router />
                    </Layout>
                </ErrorBoundary>
            </React.Suspense>
        </BrowserRouter>
    );
}
