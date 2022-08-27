import React from "react";
import style from "./Sidebar.module.css"
import { Link } from "react-router-dom";


const Sidebar = () => {
    let [activeBt, setActiveBt] = React.useState(0);
    return (
        <div className={style.sidebar}>
            <div className={style.navigation}>
                <div className={activeBt === 0 ? style.active : style.link}>
                    <Link onClick={() => { setActiveBt(0) }} to="/">portfolio</Link>
                </div>

                <div className={activeBt === 1 ? style.active : style.link}>
                    <Link onClick={() => { setActiveBt(1) }} to="/aboutme">about me</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;