import styles from '../Category_Item//Category.module.scss'
import {useHistory} from 'react-router-dom'

const Category = (props) => {
  const { title, _id, imageUrl, id, routeName } = props;
  const history = useHistory()
  const historyChange = ()=>{
    history.push(`/shop/${routeName}`)
  }
  console.log(props)
  return (
    
    <li className={styles.container} onClick={historyChange}>
      <div className={styles.wrapper}>
        <div className={styles.image} style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className={styles.content}>
          <span>{title}</span>
          <span className="u-uppercase">Shop now</span>
        </div>
      </div>
    </li>
   
  );
};
export default Category;
