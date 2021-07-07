import axios from 'axios'

const AccountApi = {
    getUser(userInputData){
        return axios.post("auth/login", userInputData)
    }
}
export default AccountApi