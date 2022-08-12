import React from "react";
import style from "./Header.module.css";
import Logo from "../../assets/Logo1.svg"

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.container}>
                <div className={style.headerInner}>
                    <div className={style.logo}>
                        <img src={Logo} alt="Logo" />
                        <div>
                            <h3>Alexander Gavrilov</h3>
                            <p>Junior Front-end Developer</p>
                        </div>

                    </div>
                    <div className={style.socialNetwork}>
                        <a href="https://vk.com/sasha_gavrilov_1">VK</a>
                        <a href="https://github.com/AlexandrReactJs">GitHub</a>
                        <a href="https://t.me/gavr_alexandr">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;