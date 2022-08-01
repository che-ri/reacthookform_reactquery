import React from "react";
import Layout from "./Layout";
import Loader from "./Loader";

export default function SuspenseFallBack() {
    return (
        <Layout>
            <Loader />
        </Layout>
    );
}
