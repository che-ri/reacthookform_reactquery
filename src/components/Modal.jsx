import React from "react";
import Portal from "./Portal";

export default function Modal({
    is_open,
    closeModal: _closeModal,
    style,
    children,
}) {
    if (!is_open) return null;
    document.body.classList.add("stop-scroll");

    function closeModal() {
        document.body.classList.remove("stop-scroll");
        _closeModal();
    }

    return (
        <Portal>
            <div
                style={style}
                className="h-max w-[50%] bg-white fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[99] p-[20px]"
            >
                {children}
            </div>
            <div
                className="fixed h-[100%] w-[100%] bg-black opacity-80 top-0 left-0 cursor-pointer z-[90]"
                onClick={closeModal}
            />
        </Portal>
    );
}
