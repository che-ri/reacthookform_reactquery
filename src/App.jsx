import React from "react";

//components
import SuspenseFallBack from "./shared/SuspenseFallBack";
import ErrorBoundary from "./shared/ErrorBoundary";
import Layout from "./shared/Layout";

import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<SuspenseFallBack />}>
                <ErrorBoundary>
                    <Layout>
                        <Router />
                    </Layout>
                </ErrorBoundary>
            </React.Suspense>
        </BrowserRouter>
    );
}
