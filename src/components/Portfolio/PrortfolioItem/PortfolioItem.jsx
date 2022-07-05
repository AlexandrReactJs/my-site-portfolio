import React from "react";
import style from "./PortfolioItem.module.css";


const PortfolioItem = () => {
    return(
        <div className={style.portfolio_item}>
                <img src="https://miro.medium.com/max/1200/1*BWsJTLW-UTO2hmvA9b92pw.jpeg" alt="" />
                <div className={style.info}>
                    <h3>React social network</h3>
                    <div className={style.underline}></div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officiis 
                        recusandae vitae natus error labore voluptatem velit maxime quae? Hic
                         veritatis numquam illum et saepe fugiat error rem libero voluptates?</p>
                </div>
                <div className={style.link}>
                    <a href="#">Открыть на GitHub</a>
                </div>
                
            </div>
    );
}
export default PortfolioItem;