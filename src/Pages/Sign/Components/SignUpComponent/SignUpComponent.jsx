import { useState } from 'react'
import ButtonComponent from '../../../../Components/ButtonComponent/ButtonComponent'
import InputComponent from '../../../../Components/InputComponent/InputComponent';
import styles from '../SignInComponent/SignInComponent.module.scss'
import axios from 'axios';


function SignUpComponent() {
    const [inputValue, setValue] = useState({})
    const getValue = (e) => {
        const { value, name } = e.target
        setValue({ ...inputValue, [name]: value })
    }
    const signUp= async (e)=>{
        e.preventDefault()
        try{
            const data = await axios.post(`auth/signup`,inputValue)
            console.log(data)
        }
        
        catch{
            console.log("error")
        }
    }
    console.log(inputValue)
    return (
        <form className={styles.container} onSubmit={signUp}>
                <span className={styles.spanOne}>I do not have an account</span>
                <span>Sign up with your e_mail and password</span>
                <InputComponent type="text" label="Display name" value={inputValue.name} onChange={getValue} name="name" />
                <InputComponent type="email" label="email" value={inputValue.email} onChange={getValue} name="email" />
                <InputComponent type="password" label="password" value={inputValue.password} onChange={getValue} name="password" />
                <InputComponent type="password" label="confirm pasword" value={inputValue.passwordConfirm} onChange={getValue} name="passwordConfirm" />
                <ButtonComponent >Sign Up</ButtonComponent>
           
        </form>
    )
}

export default SignUpComponent
