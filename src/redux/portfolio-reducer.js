const SET_PORTFOLIO_ITEMS = "SET_PORTFOLIO_ITEMS"

let initialState = {
    items: []
}


const portfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PORTFOLIO_ITEMS:{
            return{...state, items: action.items}}
        default:
            return state;
    }
}

export let setPortfolioItemsActionCreator = (items) =>{
    return ({type: SET_PORTFOLIO_ITEMS, items})
}

export default portfolioReducer;
/*
{
  "id": 1,
  "title": "React Social NetWork",
  "description": "description",
  "img": "https://miro.medium.com/max/1200/1*BWsJTLW-UTO2hmvA9b92pw.jpeg",
  "gitLink": "https://github.com/"
 },
 {
  "id": 2,
  "title": "React My Portfolio",
  "description": "It is this site",
  "img": "https://miro.medium.com/max/1200/1*BWsJTLW-UTO2hmvA9b92pw.jpeg",
  "gitLink": "https://github.com/"
 },
 {
  "id": 3,
  "title": "Layout project 1",
  "description": "It is this site",
  "img": "https://miro.medium.com/max/1200/1*BWsJTLW-UTO2hmvA9b92pw.jpeg",
  "gitLink": "https://github.com/"
 }

}
*/