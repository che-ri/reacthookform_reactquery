import React from "react";

import { ErrorBoundary } from "react-error-boundary";

//components
import SuspenseFallBack from "./components/SuspenseFallBack";
import ErrorFallBack from "./components/ErrorFallBack";
import Layout from "./components/Layout";
const Home = React.lazy(() => import("./Home"));

export default function App() {
    return (
        <React.Suspense fallback={<SuspenseFallBack />}>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <Layout>
                    <Home />
                </Layout>
            </ErrorBoundary>
        </React.Suspense>
    );
}
