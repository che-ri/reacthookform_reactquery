import React from "react";

export default function RHFForm({ handleSubmit, children, ...props }) {
    return (
        <form onSubmit={handleSubmit} {...props}>
            {children}
        </form>
    );
}
