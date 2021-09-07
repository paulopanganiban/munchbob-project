import { combineReducers } from "redux";
import userReducer from "./userReducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import headerReducer from "./headerReducer";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'header', 'cart'],
  }
  const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})
export default persistReducer(persistConfig, rootReducer)