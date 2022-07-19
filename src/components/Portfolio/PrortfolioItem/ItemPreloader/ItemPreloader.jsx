import React from "react";
import ContentLoader from "react-content-loader"
import style from "../PortfolioItem.module.css"
const ItemPreloader = (props) => (
    <ContentLoader
        className={style.portfolio_item}
        speed={2}
        width={385}
        height={710}
        viewBox="0 0 385 710"
        backgroundColor="#1f2326"
        foregroundColor="#272c30"
        {...props}
    >
        <rect x="0" y="286" rx="0" ry="0" width="280" height="0" />
        <rect x="0" y="0" rx="6" ry="6" width="385" height="380" />
        <rect x="3" y="396" rx="6" ry="6" width="385" height="38" />
        <rect x="0" y="482" rx="6" ry="6" width="385" height="142" />
        <rect x="101" y="457" rx="0" ry="0" width="185" height="2" />
        <rect x="63" y="654" rx="25" ry="25" width="259" height="52" />
    </ContentLoader>
)

export default ItemPreloader;