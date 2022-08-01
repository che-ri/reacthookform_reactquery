import React from "react";
import { Routes, Route } from "react-router-dom";

//route
const Home = React.lazy(() => import("./pages/Home"));
const WorkerWrite = React.lazy(() => import("./pages/WorkerWrite"));
const WorkerDetail = React.lazy(() => import("./pages/WorkerDetail"));

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/worker/write" element={<WorkerWrite />} />
            <Route path="/worker/detail/:id" element={<WorkerDetail />} />
        </Routes>
    );
}
