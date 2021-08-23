import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./rootReducer";
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
export const persistor = persistStore(store)
export default store;