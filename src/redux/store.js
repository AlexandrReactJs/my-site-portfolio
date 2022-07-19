import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import portfolioReducer from './portfolio-reducer';
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    portfolioPage: portfolioReducer,

})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;