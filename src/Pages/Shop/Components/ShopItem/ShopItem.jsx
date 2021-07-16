import styles from './ShopItem.module.scss';
import { connect } from 'react-redux';
import { AddBagProperty, ShopAction} from '../../../../redux/Shop/Shop.action';
import { UserSignInAsync } from '../../../../redux/Account/Account.action'
import shopBag from '../../../../assets/shopping-bag.svg'
import { useState, useEffect } from 'react'


const ShopItem = ({ _id, id, category,bag, name, imageUrl, price, favorites, ShopAction, AddBagProperty }) => {
   
    const [value, setValue] = useState(false)
    const data = {
        _id: _id,
        id: id,
        category: category,
        name: name,
        imageUrl: imageUrl,
        price: price
    }
    // useEffect(() => {
    //     const val = (localStorage.getItem("value"))

    // }, [])

    const AddOnClick = () => {
            ShopAction(data)
            setValue(true)
            // localStorage.setItem("value", value.toString())
            AddBagProperty(data)
          
    }

    const styli = {
        checked: {
            backgroundImage: `url(${shopBag})`,
            height: "25px",
            backgroundRepeat: "no repeat"
        },
        notChecked: { backgroundColor: "pink" }

    }

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <div className={styles.shopbag} style={bag ? styli.checked : styli.notChecked}></div>
                <img className={styles.image} src={imageUrl} />
                <button className={styles.button} onClick={AddOnClick}>Add to Cart</button>
            </div>
            <div className={styles.info}>
                <span classname={styles.name}>{name}</span>
                <span classname={styles.price}>{price} $</span>

            </div>

        </div>
    )
}
const mapStateToProps = (store) => {
    return { favorites: store.favorites}
}
const mapDispatchToProps = (dispatch) => {
    return {
        ShopAction: (data) => dispatch(ShopAction(data)),
        UserSignInAsync: (account) => dispatch(UserSignInAsync(account)),
        AddBagProperty: (data) => dispatch(AddBagProperty(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem)
