import WrapperLoader from "../../../../Components/WrapperLoader/WrapperLoader.Component"
import ShopItems from "../ShopItems/ShopItems"
import axios from 'axios'
import styles from './ShopCategory.module.scss'
import { useEffect, useState } from "react"

const ShopCategory = (props) => {
    const [isLoading, setIsLoading] = useState();
    const [shopCategory, setShopCategory] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        const getShopCategory = async () => {
            try {

                const shopCategories = await axios.get(`shop/${props.match.params.category}`)
                setShopCategory(shopCategories.data)
                console.log(shopCategories.data)
            }
            catch {
                console.log("error")
            }
            finally {
                setIsLoading(false)
            }

        }
        getShopCategory()
    }, [])
    console.log(props)
    // console.log(shopCategory)
    return (

        <WrapperLoader isLoading={isLoading}>
            <ShopItems  shopData={shopCategory}/>
        </WrapperLoader>

    )
}
export default ShopCategory