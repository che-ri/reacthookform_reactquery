import React from "react";
import Content from "./Content";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col items-center">
            <Header />
            <Content>{children}</Content>
        </div>
    );
}
