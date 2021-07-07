import React from 'react'
import styles from './CheckOut.module.scss'
import SingleCheckOut from './SingleCheckOut'
import {connect} from 'react-redux'
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import { totalPrice } from './Utilite/totalPrice'

const btn={
    width: "180px"
}
function CheckOut({favorite}) {

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr >
                        <td>Product</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {favorite.map(fav=>{
                        return(
                    <SingleCheckOut item={fav}/>)
                    })}
                </tbody>
            </table>
            <div className={styles.totalContainer}>
            <div className={styles.total}>
                Total :${totalPrice(favorite)}
            </div>
                    <ButtonComponent style={btn}>Pay Now</ButtonComponent>

            </div>
        </div>
    )
}

const mapStateToProps = (store)=>{
    return {favorite:store.favorites.favorite}
}
export default connect(mapStateToProps)(CheckOut)

