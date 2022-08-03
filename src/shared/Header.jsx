import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

//components
import ErrorComponent from "./ErrorComponent";
import ShopOpenButton from "../components/ShopOpenButton";
import ShopModal from "../components/ShopModal";

const temp = [{ name: "사원목록", url: "/worker" }];

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const [shop_open, setShopOpen] = React.useState(false);

    function showShop() {
        setShopOpen(true);
    }

    function closeShop() {
        setShopOpen(false);
    }

    function goHome() {
        navigate("/");
    }

    function goMenu(menu_list = [], menu_name) {
        const url = menu_list.find((x) => x.name === menu_name).url;

        if (!url) {
            return;
        } else {
            navigate(url);
        }
    }

    return (
        <div className="h-[70px] max-h-[70px] w-full flex justify-center shadow shadow-bottom">
            <div className="flex justify-between items-center min-w-[1000px] max-w-[1000px] ">
                <a
                    className="text-[20px] cursor-pointer"
                    type="button"
                    onClick={goHome}
                >
                    <strong>Code</strong>Factory
                </a>
                <ul className="flex gap-[20px] h-full">
                    {temp.map((t) => {
                        const is_cur_page = location.pathname === t.url;
                        return (
                            <Menu
                                key={`menu-${t.name}`}
                                onClick={() => goMenu(temp, t.name)}
                                is_cur_page={is_cur_page}
                            >
                                {t.name}
                            </Menu>
                        );
                    })}
                    <Menu onClick={showShop}>Mall</Menu>
                </ul>
                {/* <div className="flex gap-[10px]">
                    <ErrorComponent button_text="Root 에러발생버튼" />
                </div> */}
            </div>
            <ShopModal is_open={shop_open} closeModal={closeShop} />
        </div>
    );
}

function Menu({ children, onClick, is_cur_page, ...props }) {
    const cur_page_classname = is_cur_page
        ? "before:absolute before:h-[5px] before:w-full before:bottom-[0px] before:left-[0px] before:shadow-bottom before:bg-pink"
        : "";
    return (
        <li
            onClick={onClick}
            className={`relative flex items-center justify-center cursor-pointer w-[100px] h-full hover:font-bold after:absolute after:h-[5px] after:w-full after:bottom-[0px] after:left-[0px] after:shadow-bottom hover:after:bg-pink ${cur_page_classname} `}
            {...props}
        >
            {children}
        </li>
    );
}
