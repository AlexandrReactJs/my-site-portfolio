const SET_ADMIN_PORTFOLIO_ITEMS = "SET_ADMIN_PORTFOLIO_ITEMS"

let initialState = {
    items: []
}

const adminPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ADMIN_PORTFOLIO_ITEMS:
            return{...state, items: action.items}
        default:
            return state;
    }
}


export const setAdminPortfolioItemsActionCreator = (items) =>{
    return({
        type: SET_ADMIN_PORTFOLIO_ITEMS,
        items
    })
}


export default adminPortfolioReducer;