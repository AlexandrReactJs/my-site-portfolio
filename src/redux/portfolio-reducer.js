import { portfolioApi } from "../api/api"


const SET_PORTFOLIO_ITEMS = "SET_PORTFOLIO_ITEMS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

let initialState = {
    items: [],
    isFetching: true
}


const portfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PORTFOLIO_ITEMS:
            return{...state, items: action.items}
        case SET_IS_FETCHING:
            return{...state, isFetching: action.isFetchingValue}    
        default:
            return state;
    }
}
export let setPortfolioItemsActionCreator = (items) =>{
    return ({type: SET_PORTFOLIO_ITEMS, items})
}

export let setIsFetchingActionCreator = (isFetchingValue) => {
    return({type: SET_IS_FETCHING, isFetchingValue})
}

export let getPortfolioItemsThunkCreator = () => {
    return (dispatch) => {
        portfolioApi.getPortfolioItemsApi().then(response => {
            dispatch(setPortfolioItemsActionCreator(response));
            dispatch(setIsFetchingActionCreator(false))
        })
    }
}

export default portfolioReducer;