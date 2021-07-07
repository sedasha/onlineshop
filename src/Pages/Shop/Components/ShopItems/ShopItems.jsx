import ShopItem from '../ShopItem/ShopItem'
import styles from './Shop-items.module.scss'

const ShopItems =({shopData, category, CategoryClick})=>{
    // if (category === "mens") {
    //     category="men"
    // } else if (category==="womens"){
    //     category="women"
    // }
  
    return(
    <div className={styles.container}>
        <h1 className={styles.title} onClick={()=>{CategoryClick(category)}} >{category}</h1>
        <div className={styles.listItem}>
            {shopData.map(data=>{
                return (
                    <ShopItem {...data}/>
                )

            })}

        </div>
    </div>)
}
export default ShopItems