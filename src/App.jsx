import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
                        <ToastContainer />
                    </Layout>
                </ErrorBoundary>
            </React.Suspense>
        </BrowserRouter>
    );
}
