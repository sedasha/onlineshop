import Loader from '../Loader/Loader.Component';
import styles from './WrapperLoader.module.scss';

const WrapperLoader = ({children, loader})=>{


    return loader?(<div className={styles.container}><Loader /></div>):(children)
}
export default WrapperLoader