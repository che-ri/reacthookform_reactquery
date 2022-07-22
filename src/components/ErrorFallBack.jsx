import React from "react";
import Layout from "./Layout";

export default function ErrorFallBack({ error, resetErrorBoundary }) {
    return (
        <Layout>
            <h1 className="text-[48px]">에러가 발생했습니다.</h1>
            <table className="border border-black mt-[20px]">
                <thead className="bg-black text-white">
                    <tr>
                        <th>Error Log</th>
                    </tr>
                </thead>
                <tbody className="h-[50px]">
                    <tr>
                        <td>{error.message}</td>
                    </tr>
                </tbody>
            </table>
            <button
                className="bg-black rounded text-white px-[10px] py-[5px] mt-[20px]"
                onClick={resetErrorBoundary}
            >
                홈으로 가기
            </button>
        </Layout>
    );
}
