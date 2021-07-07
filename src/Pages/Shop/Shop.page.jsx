import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import styles from "../Shop/Shop.module.scss";
import WrapperLoader from "../../Components/WrapperLoader/WrapperLoader.Component";
import ShopItems from "./Components/ShopItems/ShopItems";
import {Route} from 'react-router-dom';

const Shop = (props) => {
  const [shop, setShop] = useState([]);
  const [error, setError] = useState("Error")
  const [isLoading, setIsLoading] = useState();

const history = useHistory()
const ShopCategoryClick=(category)=>{
history.push(`/shop/${category}`)
}
useEffect(() => {
  (async () => {
    try {
      const shop = await axios.get("shop");
      console.log(shop);
      setShop(shop.data);
    }
    catch{
      console.log("x")
    }
    finally{
      console.log("dc")
    }
    
  })();
}, []);
const categories =['mens', 'womens', 'sneakers', 'jackets', 'hats'];



  return (
    <WrapperLoader isLoading={isLoading}>
      <div className={styles.container}>
          {categories.map(category=>{
            let filterShop = shop.filter(product=>product.category===category)
            return (
              <div>
              <ShopItems shopData={filterShop.splice(0, 4)} category={category} CategoryClick={ShopCategoryClick}/>

              </div>
            )
          })}
      </div>
    </WrapperLoader>
  );
};
export default Shop;
