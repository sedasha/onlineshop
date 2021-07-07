import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.scss";
import Category from "./Components/Category_Item/CategoryItem";
import WrapperLoader from "../../Components/WrapperLoader/WrapperLoader.Component";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      try {
        const result = await axios.get("categories");
        setData(result.data);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false)
      }
    };
    getData();
  }, []);
  console.log(data);

  return (
    <WrapperLoader loader={isLoading}>
    <ul className={styles.container} >

      {data.map((item) => {
        return (
         <Category {...item}  key={item._id}/>
        );
      })}
    </ul>
    </WrapperLoader>
  );
};
export default Home;
