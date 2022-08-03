import React from "react";
import img_person from "../../asset/images/person.png";

export default function WorkerTable({ data }) {
    const { name, team, age, email, phone, date } = data;

    const temp = [
        {
            name: "이름",
            value: name,
        },
        { name: "팀", value: team },
        { name: "나이", value: age },
        { name: "이메일", value: email },
        { name: "연락처", value: phone },
        { name: "등록일", value: date },
    ];

    return (
        <div className="grid grid-cols-2 items-center">
            <img src={img_person} alt="사원이미지" className="w-[50%]" />
            <div>
                {temp.map((t) => (
                    <div
                        key={`header-${t.name}`}
                        className="grid grid-cols-[100px_1fr] auto-rows-[40px] bg-gray gap-[1px]"
                    >
                        <div className="px-[10px] py-[5px] bg-white">
                            {t.name}
                        </div>
                        <div className="px-[10px] py-[5px] bg-white">
                            {t.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
