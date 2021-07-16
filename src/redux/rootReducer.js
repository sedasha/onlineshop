import {combineReducers} from 'redux';
import testReducer from './test/test.reducer'
import ShopReducer from './Shop/Shop.reducer'
import AccountReducer from './Account/Account.reducer'
import {authPersistConfig, shopPersistConfig, shopPersistConfigg} from './persist.config'
import {persistReducer} from 'redux-persist'


export default combineReducers({
    test: testReducer,
    favorites: persistReducer(shopPersistConfig, ShopReducer),

    account: persistReducer(authPersistConfig, AccountReducer)

})