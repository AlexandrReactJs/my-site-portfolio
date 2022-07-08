import { combineReducers, legacy_createStore } from "redux";
import portfolioReducer from './portfolio-reducer';

let reducers = combineReducers({
    portfolioPage: portfolioReducer
})

let store = legacy_createStore(reducers);

export default store;