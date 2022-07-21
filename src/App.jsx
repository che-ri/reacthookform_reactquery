import React from "react";

import { ErrorBoundary } from "react-error-boundary";

//components
import SuspenseFallBack from "./SuspenseFallBack";
import ErrorFallBack from "./ErrorFallBack";
import Layout from "./Layout";
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
