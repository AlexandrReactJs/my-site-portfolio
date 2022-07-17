const SET_PORTFOLIO_ITEM = "SET_PORTFOLIO_ITEM";


let initialState = {
    item: null
}


const refactoringItemReducer = (state = initialState, action) => {
    switch(action.type){
        case action.type:
            debugger
            return{...state, item: action.item}
        default:
            return state;
    }
}


export const setRefactoringItemActionCreator = (item) => {
    debugger
    return({
        type: SET_PORTFOLIO_ITEM,
        item
    })
}


export default refactoringItemReducer;