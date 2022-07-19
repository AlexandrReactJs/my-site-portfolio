import React from "react";
import Portfolio from "./Portfolio";
import { connect } from "react-redux";
import { getPortfolioItemsThunkCreator } from "../../redux/portfolio-reducer";





const PortfolioContainer = ({items, isFetching, getPortfolioItemsThunkCreator}) => {

   
    React.useEffect(() => {
        getPortfolioItemsThunkCreator();
        
    }, [getPortfolioItemsThunkCreator]);


    return (
        <Portfolio isFetching={isFetching} items= {items}/>
      
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.portfolioPage.items,
        isFetching: state.portfolioPage.isFetching
    }
}

export default connect(mapStateToProps, { getPortfolioItemsThunkCreator })(PortfolioContainer);