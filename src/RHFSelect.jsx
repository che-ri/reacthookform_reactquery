import React from "react";

export default function RHFSelect({
    register,
    name,
    rules = {},
    onChange,
    children,
    ...props
}) {
    return (
        <select {...register(name, rules)} onChange={onChange} {...props}>
            {children}
        </select>
    );
}
