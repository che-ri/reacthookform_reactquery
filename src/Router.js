import React from "react";
import { Routes, Route } from "react-router-dom";

//route
const Home = React.lazy(() => import("./pages/Home"));
const WorkerList = React.lazy(() => import("./pages/WorkerList"));
const WorkerWrite = React.lazy(() => import("./pages/WorkerWrite"));
const WorkerDetail = React.lazy(() => import("./pages/WorkerDetail"));

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/worker">
                <Route index element={<WorkerList />} />
                <Route path="write/:id" element={<WorkerWrite />} />
                <Route path="detail/:id" element={<WorkerDetail />} />
            </Route>
        </Routes>
    );
}
