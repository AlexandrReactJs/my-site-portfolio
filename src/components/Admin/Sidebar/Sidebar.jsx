import React from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return(
        <div className={style.sidebar}>
            <Link to='/admin/portfolio'>Portfolio</Link>
            <Link to='/admin/portfolio'>Portfolio</Link>
            <Link to='/admin/portfolio'>Portfolio</Link>

        </div>
    )
}

export default Sidebar;