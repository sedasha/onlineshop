import { Route } from 'react-router-dom'
import ShopCategory from './Components/ShopCategory/ShopCategory'
import Shop from './Shop.page'

const ShopLink = () => {
    return (
        <div>
            <Route path='/shop' exact>
                <Shop />
            </Route>
            <Route path='/shop/:category' component={ShopCategory} />
        </div>
    )
}
export default ShopLink