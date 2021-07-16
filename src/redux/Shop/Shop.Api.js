import axios from 'axios'

const ShopApi = {
    getData(){
        return axios.get("shop")
    }
}
export default ShopApi