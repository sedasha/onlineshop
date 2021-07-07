import React from 'react'
import styles from './CartItem.module.scss'



const CartItem = ({ name, count, price, imageUrl }) => {
    return (
        <div className={styles.cartContain}>
            <img src={imageUrl} className={styles.image} />
            <div className={styles.cartItem}>
                <span>{name}</span>
                <div>
                    <span>{count} X </span>
                    <span>${price}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
