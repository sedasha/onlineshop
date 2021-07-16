import {useState} from 'react'


export const useInput =(e)=> {
   const [inputValue, setValue] = useState({})
   const getValue = (e) => {
        const { value, name } = e.target
        setValue({ ...inputValue, [name]: value })
    }
    return {inputValue, getValue,setValue}
}



