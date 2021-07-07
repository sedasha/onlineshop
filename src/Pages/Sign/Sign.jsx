import { useState } from 'react';
import styles from './Sign.module.scss';

import SignInComponents from './Components/SignInComponent/SignInComponent';
import SignUpComponent from './Components/SignUpComponent/SignUpComponent';

const Sign = () => {
    const [isLoading, setIsLoading] = useState();
    return (
        <div className={styles.container}>
            <SignInComponents />
            <SignUpComponent />
        </div>

    )
}
export default Sign