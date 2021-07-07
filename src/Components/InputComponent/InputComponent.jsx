import styles from './InputComponent.module.scss';
import {useRef} from 'react';
import classNames from 'classnames'

const InputComponent = ({type="text",  label, value="", ...restProps})=>{
    const inputRef = useRef()
    const labelNewClass = classNames({
        [styles.label]: true,
        [styles.active]: value
    })
    const InputChangeRef =()=>{
       inputRef.current.focus()
    }
  
return (
    <div className={styles.container}>
        <input className={styles.input} type={type} {...restProps} ref= {inputRef} value={value}/>
        <label className={labelNewClass} onClick= {InputChangeRef}> {label} </label>
    </div>
)
}
export default InputComponent