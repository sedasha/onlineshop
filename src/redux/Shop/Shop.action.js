import types from './Shop.types';
import ShopApi from "./Shop.Api"

export const ShopAction =(selected)=>{
    return {type:types.ADD_TO_FAVORITES, payload:selected}
}
export const Decrease = (selected)=>{
    return{type: types.DECREASE_FAVORITE_ITEM, payload: selected}
}
export const Remove = (selected)=>{
    return {type: types.REMOVE_FAVORITE_ITEM, payload: selected}
}

export const GetData= () => async (dispatch) => {
    try {
        const result = await ShopApi.getData()
        const data = result.data
        dispatch(GetDataAction(data))
        console.log(data)
       
    }
    catch {
        // dispatch(AccountAction(data))
        console.log("err")
    }
}
export const GetDataAction =(data)=>{
    return {type: types.DATA, payload: data}
}
export const AddBagProperty =(data)=>{
    return {type: types.ADD_BAG_PROPERTY, payload: data}
}
