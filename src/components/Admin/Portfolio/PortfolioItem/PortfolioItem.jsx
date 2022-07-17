import React from "react";
import style from "./PortfolioItem.module.css";
import {Link} from "react-router-dom";

const PortfolioItem = (props) => {
    return (
        <div className={style.item}>
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.gitLink}>{props.gitLink}</a>
            <div>
                <Link to={"/admin/refactoringItem/" + props.id}>Редактировать</Link>
            </div>

        </div>
    )
}

export default PortfolioItem;