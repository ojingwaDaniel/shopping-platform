import React from "react"
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import './header.style.scss';
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux"
import CartIcon from '../cart.icon/cart.component';
import CartDropdown from "../cart.dropdown/cart.dropdown";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT 
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
        
      )}
      <CartIcon/>
      { hidden ? null : <CartDropdown/>}
      
      
    </div>
  </div>
);
const mapStateProps = ({user: {currentUser}, cart : {hidden}})=>({
  hidden,
  currentUser
})';'

export default connect(mapStateProps)(Header);