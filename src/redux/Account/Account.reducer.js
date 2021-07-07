import types  from './Acount.types'

const initialState = {
    user: null,
    globalErrorMessage: ""

}
const AccountReducer = (state=initialState, {type, payload})=>{
switch(type){
    case types.SET_GLOBAL_ERROR_MESSAGE: 
    return {...state}
    case types.GET_USER_DATA:
        return{...state, user:payload}
    case types.CLEAR_USER_DATA:
        return initialState
    default: return state

}

}
export default AccountReducer