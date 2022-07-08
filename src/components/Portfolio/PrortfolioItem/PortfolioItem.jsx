import React from "react";
import style from "./PortfolioItem.module.css";


const PortfolioItem = (props) => {
    return(
        <div className={style.portfolio_item}>
                <img src={props.img} alt="" />
                <div className={style.info}>
                    <h3>{props.title}</h3>
                    <div className={style.underline}></div>
                    <p>{props.description}</p>
                </div>
                <div className={style.link}>
                    <a href={props.gitLink}>Открыть на GitHub</a>
                </div>
                
            </div>
    );
}
export default PortfolioItem;