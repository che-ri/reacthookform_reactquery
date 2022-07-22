import ReactDOM from "react-dom";

export default function Portal({ children }) {
    const el = document.getElementById("portal");

    return ReactDOM.createPortal(children, el);
}
