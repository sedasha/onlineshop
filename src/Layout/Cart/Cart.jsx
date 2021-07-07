import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent"
import styles from './Cart.module.scss'
import { connect } from 'react-redux';
import CartItem from './Components/CartItem'
import { useHistory } from "react-router-dom";


const btnStyle = {
    padding: "18px 28px"
}
function Cart({ cart, favorites }) {
    const history = useHistory()
    const checkOutClick = () => {
        history.push(`/checkout`)
        console.log("hey")
    }

    console.log(favorites)
    return (
        <div className={cart ? styles.container : styles.false}>
            <div className={styles.cart}>
                {favorites.map(item => {
                    return (
                        <CartItem {...item} />
                    )
                })}




            </div>
            <ButtonComponent style={btnStyle} onClick={() => { checkOutClick() }} type="button">GO TO CHECKOUT</ButtonComponent>

        </div>
    )
}
const mapStateToProps = (store) => {
    return { favorites: store.favorites.favorite }
}
// const mapDispatchToProps = (dispatch)=>{
// return {ShopAction:(data)=>dispatch(ShopAction(data))}
// }
export default connect(mapStateToProps)(Cart)
