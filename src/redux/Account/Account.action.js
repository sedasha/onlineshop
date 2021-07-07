import axios from 'axios'
import types from './Acount.types'
import AccountApi from './Account.api'


const AccountAction = (message) => {
    return { type: types.SET_GLOBAL_ERROR_MESSAGE, payload: message }
}
const UserSignIn = (userData) => {
    return { type: types.GET_USER_DATA, payload: userData }
}
 export const clearUserData=()=>{
    return {
        type: types.CLEAR_USER_DATA
    }
}
 export const UserSignInAsync = (userInputData) => async (dispatch) => {
    try {
        const result = await AccountApi.getUser(userInputData)
        const data = result.data.data
        dispatch(UserSignIn(data))
    }
    catch {
        // dispatch(AccountAction(data))
        console.log("err")
    }
}


