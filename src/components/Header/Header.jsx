import React from "react";
import style from "./Header.module.css";


const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.container}>
                <div className={style.headerInner}>
                    <div className={style.logo}>
                        <h3>Alexander Gavrilov</h3>
                        <p>Junior Front-end Developer</p>
                    </div>
                    <div className={style.socialNetwork}>
                        <a href="#">VK</a>
                        <a href="#">GitHub</a>
                        <a href="#">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;