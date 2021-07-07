import { useState } from 'react'
import { ReactComponent as CrownSVG } from '../../assets/crown.svg';
import { ReactComponent as ShopBag } from '../../assets/shopping-bag.svg';
import styles from './Header.module.scss';
import { Link, useHistory } from "react-router-dom";
import classNames from 'classnames';
import Modal from '../Modal/Modal';
import useToggle from '../../Components/UseToggle/UseToggle';
import Cart from '../Cart/Cart';
import OutsideClickHandler from 'react-outside-click-handler';
import { connect, useDispatch } from 'react-redux';
import { clearUserData } from '../../redux/Account/Account.action';
import { ShopbagCount } from './Utilite/shopBagCount'



const Header = (props) => {
  const styleBag = classNames({
    [styles.item]: true,
    [styles.bag]: true
  })
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cart, setCart] = useToggle();
  const history = useHistory()
  const handleClick = () => {
    history.push("/home")
  }
  const { user, favorites } = props
  const dispatch = useDispatch()
  const SignInSignOutClick = () => {
    if (!user) {
      history.push("/sign")
    } else {
      dispatch(clearUserData())
    }
  }
  return (
    <header>
      <div className={styles.container}>
        <CrownSVG onClick={handleClick} />
        <nav className={styles.nav}>
          <Link to="/shop" className={styles.item}>Shop</Link>
          <Link to="/contact" className={styles.item}>Contact</Link>
          {/* <Link to="/sign" </Link> */}
          <span className={styles.item} onClick={SignInSignOutClick}>{user ? "Sign Out" : "Sign In"} </span>
          <span className={styleBag} onClick={setCart}><ShopBag />

              <span className={styles.count}>{ShopbagCount(favorites)}</span>
          </span>
          <OutsideClickHandler onOutsideClick={setCart} disabled={!cart}>
              <span><Cart cart={cart} /></span>
          </OutsideClickHandler>
        </nav>
      </div>
    </header>
  )
};
const mapStateToProps = (store) => {
  return { user: store.account.user, favorites: store.favorites.favorite }
}

export default connect(mapStateToProps)(Header)
