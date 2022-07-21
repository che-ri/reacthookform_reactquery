import React from "react";

export default function RHFInput({
    register,
    name,
    rules = {},
    onChange,
    ...props
}) {
    return <input {...register(name, rules)} {...props} />;
}
