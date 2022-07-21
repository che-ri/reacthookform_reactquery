import React from "react";

export default function RHFForm({ handleSubmit, children, ...props }) {
    return (
        <form handleSubmit={handleSubmit} {...props}>
            {children}
        </form>
    );
}
