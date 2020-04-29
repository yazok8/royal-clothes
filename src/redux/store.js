import {createStore, applyMiddleware} from "redux"; 
import {persistStore} from "redux-persist";
import logger from "redux-logger"; 
import thunk from "redux-thunk";

import rootReducer from "./root-reducer"; 

const middwares = [thunk];

if(process.env.NODE_ENV==="development"){
    middwares.push(logger);
}


export const store = createStore (rootReducer, applyMiddleware(...middwares));

export const persistor = persistStore(store);

export default {store,persistor};