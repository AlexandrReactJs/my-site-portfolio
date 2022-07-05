import React from "react";
import style from "./Portfolio.module.css";
import PortfolioItem from "./PrortfolioItem/PortfolioItem";

const Portfolio = () => {
    return(
        <div className={style.portfolio}>
            <h3>ПОРТФОЛИО</h3>
            <div className={style.portfolio_items}>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
            </div>
       </div>
    );
}


export default Portfolio;