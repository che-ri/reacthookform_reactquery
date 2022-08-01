import React from "react";
import Content from "./Content";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center">
            <div className="h-[100%] max-w-[1000px] w-full py-[20px] relative">
                <Header />
                <Content>{children}</Content>
            </div>
        </div>
    );
}
