import types from './Shop.types';

export const ShopAction =(selected)=>{
    return {type:types.ADD_TO_FAVORITES, payload:selected}
}
export const Decrease = (selected)=>{
    return{type: types.DECREASE_FAVORITE_ITEM, payload: selected}
}
export const Remove = (selected)=>{
    return {type: types.REMOVE_FAVORITE_ITEM, payload: selected}
}