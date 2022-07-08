import React from "react";
import style from "./Portfolio.module.css";
import PortfolioItem from "./PrortfolioItem/PortfolioItem";

const Portfolio = (props) => {
    
    let portfolioItems = props.items.map((el) => (<PortfolioItem title = {el.title} description = {el.description} img = {el.img} gitLink = {el.gitLink} id = {el.id}/>));
    return(
        <div className={style.portfolio}>
            <h3>ПОРТФОЛИО</h3>
            <div className={style.portfolio_items}>
                {portfolioItems}
            </div>
       </div>
    );
}


export default Portfolio;