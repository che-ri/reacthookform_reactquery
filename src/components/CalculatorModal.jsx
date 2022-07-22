import React from "react";
import Modal from "./Modal";

export default function CalculatorModal({ is_open, closeModal }) {
    return (
        <Modal is_open={is_open} closeModal={closeModal}>
            <h1>hi!</h1>
        </Modal>
    );
}
