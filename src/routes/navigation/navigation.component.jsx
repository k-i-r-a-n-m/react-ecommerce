import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// components
import CartIcon from "../../components/cartIcon/cartIcon.component";
import CartDropdown from "../../components/cartDropdown/cartDropdown.component";

// svg
import { ReactComponent as CrownLogo } from "../../assests/crown.svg";

// context
import { UserContext } from "../../contexts/user.context";
import { CartDropdownContext } from "../../contexts/cardDropdown.contex";

// firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
const Navigation = () => {
  
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartDropdownContext)

 

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {/* Based on USER object dispaly sigin-IN/OUT */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign IN
            </Link>
          )}

          <CartIcon className="logo"  />
        </div>
        {isCartOpen ? <CartDropdown /> : ""}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
