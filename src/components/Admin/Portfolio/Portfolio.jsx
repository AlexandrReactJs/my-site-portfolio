import React from "react";
import style from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem/PortfolioItem";


const Portfolio = (props) => {
    let portfolioItems = props.items.map((el) => (<PortfolioItem id={el.id} title={el.title} description = {el.description} img={el.img} gitLink={el.gitLink}/>))
    return(
        <div className={style.portfolio}>
            <div className={style.portfolio_items}>
                {
                 portfolioItems   
                }
            </div>
        </div>
    )
}
export default Portfolio;