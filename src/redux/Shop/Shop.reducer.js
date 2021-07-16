
import types from './Shop.types'
import {UpdateDecrease, UpdateFavorites, UpdateRemove, AddBagProperty} from './Shop.utilite'

const initialState= {
    favorite:[],
    data: []
}
const ShopReducer =(state=initialState, {type, payload})=> {
    switch(type){
        case types.ADD_TO_FAVORITES:
            return {...state, favorite: UpdateFavorites(state.favorite, payload)} 
            case types.DECREASE_FAVORITE_ITEM:
                return{ ...state, favorite: UpdateDecrease(state.favorite, payload)}
            case types.REMOVE_FAVORITE_ITEM:
                return{...state, favorite: UpdateRemove(state.favorite, payload)}
                case types.DATA:
                return {...state, data: payload}
                case types.ADD_BAG_PROPERTY:
                    return {...state, data: AddBagProperty(state.favorite, state.data, payload) }
        default: return state;
    }
  
}

export default ShopReducer
