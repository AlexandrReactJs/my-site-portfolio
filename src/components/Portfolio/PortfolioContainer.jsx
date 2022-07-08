
import React from "react";
import Portfolio from "./Portfolio";
import { connect } from "react-redux";
import axios from "axios";
import { setPortfolioItemsActionCreator } from "../../redux/portfolio-reducer";




const PortfolioContainer = ({items, setPortfolioItemsActionCreator}) => {
    const getPortfolioItems = React.useCallback(() => {
        axios.get('https://62c5b945a361f725128cd8a5.mockapi.io/portfolioItems').then(resp => {
                setPortfolioItemsActionCreator(resp.data)
               
            })
    }, [setPortfolioItemsActionCreator])
   
    React.useEffect(() => {
            getPortfolioItems();
        
    }, [getPortfolioItems]);


    return (

        <Portfolio items={items} />
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.portfolioPage.items
    }
}

export default connect(mapStateToProps, { setPortfolioItemsActionCreator })(PortfolioContainer);