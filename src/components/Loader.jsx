import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
};

export default function Loader({ align = "center", text = "로딩 중입니다." }) {
    return (
        <div
            className="flex flex-col items-center h-full text-[20px]"
            style={{
                justifyContent: align,
            }}
        >
            <p className="text-center mb-[20px]">{text}</p>
            <ClipLoader cssOverride={override} size={100} />
        </div>
    );
}
