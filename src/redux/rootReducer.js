import { combineReducers } from "redux";
import userReducer from "./userReducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import headerReducer from "./headerReducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'header'],
  }
  const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
})
export default persistReducer(persistConfig, rootReducer)