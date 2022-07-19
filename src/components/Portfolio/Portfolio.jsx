import React from "react";
import style from "./Portfolio.module.css";
import ItemPreloader from "./PrortfolioItem/ItemPreloader/ItemPreloader";
import PortfolioItem from "./PrortfolioItem/PortfolioItem";

const Portfolio = (props) => {
    
    return(
        <div className={style.portfolio}>
            <h3>ПОРТФОЛИО</h3>
            <div className={style.portfolio_items}>
                {props.isFetching ? [...new Array(6)].map((_, i) => <ItemPreloader key={i}/>) : props.items.map((el) => (<PortfolioItem key = {el.id} title = {el.title} description = {el.description} img = {el.img} gitLink = {el.gitLink} id = {el.id}/>))}
            </div>
       </div>
    );
}


export default Portfolio;