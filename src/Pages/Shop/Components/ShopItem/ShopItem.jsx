import styles from './ShopItem.module.scss';
import {connect} from 'react-redux';
import {ShopAction} from '../../../../redux/Shop/Shop.action';
import {UserSignInAsync} from '../../../../redux/Account/Account.action'


const ShopItem = ({ _id, id, category, name, imageUrl, price, favorites, ShopAction}) => {
    console.log(favorites)
    const data ={
        _id: _id,
        id: id,
        category: category,
        name: name,
        imageUrl: imageUrl,
        price: price
    }
    const AddOnClick =()=>{
        if(true){
            ShopAction(data)
        } else {

        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={imageUrl}/>
                <button className={styles.button} onClick={AddOnClick}>Add to Cart</button>
            </div>
            <div className={styles.info}>
                <span classname={styles.name}>{name}</span>
                <span classname={styles.price}>{price} $</span>
            </div>

        </div>
    )
}
const mapStateToProps = (store)=>{
    return {favorites:store.favorites}
}
const mapDispatchToProps = (dispatch)=>{
return {ShopAction:(data)=>dispatch(ShopAction(data)), UserSignInAsync:(account)=>dispatch(UserSignInAsync(account))}
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopItem)
//{_id: "6054663685753829004d63de", id: 3, category: "hats", name: "Brown Cowboy", imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png", …}