import { combineReducers } from "redux";
import userReducer from "./userReducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import headerReducer from "./headerReducer";
import cartReducer from "./cartReducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'header', 'cart'],
  }
  const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
    cart: cartReducer,
})
export default persistReducer(persistConfig, rootReducer)