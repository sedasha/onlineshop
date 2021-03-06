import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import styles from "../Shop/Shop.module.scss";
import WrapperLoader from "../../Components/WrapperLoader/WrapperLoader.Component";
import ShopItems from "./Components/ShopItems/ShopItems";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { GetData } from '../../redux/Shop/Shop.action'

const Shop = ({ GetData, data }) => {
  const [shop, setShop] = useState([]);
  const [error, setError] = useState("Error")
  const [isLoading, setIsLoading] = useState();

  const history = useHistory()
  const ShopCategoryClick = (category) => {
    history.push(`/shop/${category}`)
  }
  useEffect(() => {
    if (!data){
    (async () => {
      await GetData()
    })()
  }
},[]);
  const categories = ['mens', 'womens', 'sneakers', 'jackets', 'hats'];

  return (
    <WrapperLoader isLoading={isLoading}>
      <div className={styles.container}>
        {categories.map(category => {
          let filterShop = data.filter(product => product.category === category)
          return (
            <div>
              <ShopItems shopData={filterShop.splice(0, 4)} category={category} CategoryClick={ShopCategoryClick} />

            </div>
          )
        })}
      </div>
    </WrapperLoader>
  );
};
const mapStateToProps = (store) => {
  return {
    data: store.favorites.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return { GetData: () => dispatch(GetData()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)

