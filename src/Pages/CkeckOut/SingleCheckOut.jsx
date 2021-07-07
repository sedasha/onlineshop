import React from 'react'
import styles from './SingleCheckOut.module.scss'
import { connect } from 'react-redux'
import { ShopAction, Decrease, Remove } from '../../redux/Shop/Shop.action'


function SingleCheckOut({ item, ShopAction, Decrease, Remove }) {
    const { imageUrl, name, count, price } = item
 console.log(Remove)
    return (
        <tr >
            <td><img src={imageUrl} /></td>
            <td><div>{name}</div></td>
            <td>
                <span className={styles.span} onClick={() => { Decrease(item) }}>{"  <  "}</span>
                <span>{count}</span>
                <span className={styles.span} onClick={() => { ShopAction(item) }}>{"  >  "}</span>
            </td>
            <td><div>{price} $ </div></td>
            <td><div className={"u-cursor--pointer"}onClick={()=>{Remove(item)}}>X</div></td>
        </tr>
    )
}

const mapStateToProps = (store) => {
    return { favorites: store.favorites }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ShopAction: (item) => dispatch(ShopAction(item)),
        Decrease: (item) => dispatch(Decrease(item)),
        Remove: (item) => dispatch(Remove(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCheckOut)

