import React, { useState, useEffect } from 'react';
import { GrMenu, GrClose } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import '../../assets/styles/Navbar__container.scss'
import { NavSearching } from './NavSearching';
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { ItemNavbar } from './ItemNavbar';
import { VscChromeClose } from 'react-icons/vsc';
import { connect } from 'react-redux'


function Navbar({ cart }) {

  const [sidebar, setSiderbar] = useState(false);
  const [counterCart, setCounterCart] = useState(0);
  const showSidebar = () => setSiderbar(!sidebar);


  useEffect(() => {
    let count = 0;
    cart.forEach(element => {
      count += element.qty
    });
    setCounterCart(count)

  }, [cart, counterCart])
  // const setShow = () => {
  //   setNav(!nav)
  // }
  return (
    <>
      <nav className='navbar--container'>

        <Link to='#' className="menu-bars--active">

          <GrMenu onClick={showSidebar} size={'1.5em'} />
        </Link>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className="navbar-toggle">
              <Link to='#' className='menu-bars-close'>
                <VscChromeClose color={'white'} size={'1.2em'} onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => <ItemNavbar key={index} item={item} />)}
          </ul>
        </nav>
        <Link to="/"> <h1 className="logo">KOCHANIE</h1></Link>

        <Link className="shopping__cart--icon" to='/cart'>
          <FiShoppingCart size={'1.5em'} />
          <span className="counter__cart">{counterCart}</span>
        </Link>

      </nav>

      <NavSearching />

    </>

  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar)
