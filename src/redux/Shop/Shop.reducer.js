import types from './Shop.types'
import {UpdateDecrease, UpdateFavorites, UpdateRemove} from './Shop.utilite'

const initialState= {
    favorite:[]
}
const ShopReducer =(state=initialState, {type, payload})=> {
    switch(type){
        case types.ADD_TO_FAVORITES:
            return {...state, favorite: UpdateFavorites(state.favorite, payload)} 
            case types.DECREASE_FAVORITE_ITEM:
                return{ ...state, favorite: UpdateDecrease(state.favorite, payload)}
            case types.REMOVE_FAVORITE_ITEM:
                return{...state, favorite: UpdateRemove(state.favorite, payload)}
        default: return state;
    }
  
}

export default ShopReducer
