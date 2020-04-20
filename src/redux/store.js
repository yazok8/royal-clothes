import {createStore, applyMiddleware} from "redux"; 
import logger from "redux-logger"; 

import rootReducer from "./root-reducer"; 

const middwares = [logger]; 


const store = createStore (rootReducer, applyMiddleware(...middwares));

export default store; 