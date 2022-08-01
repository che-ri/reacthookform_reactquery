import React from "react";

export default function RHFInput({
    register,
    rules: _rules,
    name,
    type = "text",
    onChange,
    ...props
}) {
    let rules = {
        ..._rules,
        onChange,
        // validate: (value) => value > 0,  validate 규칙도 필요하면 넣으면 좋을듯
    };

    switch (type) {
        case "text":
            rules = { ...rules };
            break;
        case "number":
            rules = { ...rules, pattern: /^(0|[1-9]\d*)(\.\d+)?$/ };
            break;
        case "phone":
            rules = {
                ...rules,
                pattern:
                    /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3,4}( |-|\.)?\d{4})/i,
            };
            break;
        case "email":
            rules = {
                ...rules,
                pattern: /^\S+@\S+$/i,
            };
            break;
        case "date":
            rules = {
                ...rules,
                pattern: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
            };
            break;
        default:
            rules = { ...rules };
    }

    return <input onChange={onChange} {...register(name, rules)} {...props} />;
}
