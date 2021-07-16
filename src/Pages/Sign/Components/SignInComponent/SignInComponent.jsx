import ButtonComponent from "../../../../Components/ButtonComponent/ButtonComponent"
import InputComponent from "../../../../Components/InputComponent/InputComponent"
import styles from './SignInComponent.module.scss';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserSignInAsync } from "../../../../redux/Account/Account.action";
import { useInput } from "../../../../CustomHook/useInput.hook";


const SignInComponents = (props) => {
  
    const [data, setData] = useState({})
    const { user, UserSignInAsync } = props
    const {inputValue, getValue} = useInput()
   
    const MainPage = useHistory()
    const SignIn = async (e) => {
        e.preventDefault()
        await UserSignInAsync(inputValue)
        setTimeout(()=>{
            if (user) MainPage.push('/home')

        }, 150)
        // try{
        //     const data = await axios.post("auth/login",inputValue)
        //     setData(data.data)

        //     if (data)MainPage.push('/home')
        // }

        // catch{
        //     console.log("error")
        // }
    }
    return (
        <form className={styles.container} onSubmit={SignIn}>
            <span className={styles.spanOne}>I already have an account</span>
            <span>Sign in with your e_mail and password</span>

            <InputComponent type="email" label="email" value={inputValue.email} onChange={getValue} name="email" />
            <InputComponent type="password" label="password" value={inputValue.password} onChange={getValue} name="password" />
            <ButtonComponent> SIGN IN </ButtonComponent>

        </form>
    )
}

const mapStateToProps = (store) => {
    return { user: store.account.user }
}
const mapDispatchToProps = (dispatch) => {
    return { UserSignInAsync: (account) => dispatch(UserSignInAsync(account)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponents)