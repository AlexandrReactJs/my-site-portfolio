import React from "react";
import Portfolio from "../Portfolio";
import { connect } from "react-redux";
import {setAdminPortfolioItemsActionCreator} from "../../../../redux/admin-portfolio-reducer";
import axios from "axios";


const PortfolioContainer = ({items, setAdminPortfolioItemsActionCreator}) => {
    const getPortfolioItems = React.useCallback(() => {
        axios.get('https://62c5b945a361f725128cd8a5.mockapi.io/portfolioItems').then(resp => {
                setAdminPortfolioItemsActionCreator(resp.data);
               
            })
    }, [setAdminPortfolioItemsActionCreator])

    React.useEffect(() => {
        getPortfolioItems();
    }, [getPortfolioItems])

    return(
        <Portfolio items = {items}/>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.adminPortfolioPage.items
    }
}

export default connect(mapStateToProps, {setAdminPortfolioItemsActionCreator})(PortfolioContainer);