import styles from './ButtonComponent.module.scss';


const ButtonComponent = ({children, type="submit", ...restProps}) =>{
   
    return (
            <button type={type} className={styles.button} {...restProps}>{children}</button>
    )
}
export default ButtonComponent