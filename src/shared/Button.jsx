import React from "react";

const Button = React.forwardRef(
    ({ onClick, children, style, className, ...props }, ref) => {
        return (
            <button
                onClick={onClick}
                style={{
                    ...style,
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
                ref={ref}
                className={`h-max w-max bg-black text-white py-[5px] px-[10px] rounded flex items-center transition-all hover:bg-blue ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;
