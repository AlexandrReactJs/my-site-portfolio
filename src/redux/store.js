import { combineReducers, legacy_createStore } from "redux";
import adminPortfolioReducer from "./admin-portfolio-reducer";
import adminReducer from "./admin-reducer";
import portfolioReducer from './portfolio-reducer';
import refactoringItemReducer from "./refactoring-portfolio-item";

let reducers = combineReducers({
    portfolioPage: portfolioReducer,
    adminPortfolioPage: adminPortfolioReducer,
    refactoringItemPage: refactoringItemReducer,
    adminPage: adminReducer
})

let store = legacy_createStore(reducers);

window.store = store;
export default store;