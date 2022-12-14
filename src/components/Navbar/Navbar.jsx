import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaTwitter, FaSkype, FaVimeoV} from "react-icons/fa";
import {IoMdRocket} from "react-icons/io";

const Navbar = () => {

  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
      setNavToggle(prevData => !prevData);
  }

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 500) {
        setColor(true)
    } else {
        setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

return (
  <nav className={color ?'navbar w-100 flex navbar-scrolled ' :'navbar w-100 flex'}>
      <div className='container w-100'>
          <div className='navbar-content flex fw-7'>
              <div className='brand-and-toggler flex flex-between w-100'>
                  <Link to = "/" className='navbar-brand fs-26'>DamelHub.</Link>
                  <div type = "button" className={`hamburger-menu ${navToggle ? 'hamburger-menu-change' : ""}`} onClick={navHandler}>
                      <div className='bar-top'></div>
                      <div className='bar-middle'></div>
                      <div className='bar-bottom'></div>
                  </div>
              </div>

              <div className={`navbar-collapse ${navToggle ? 'show-navbar-collapse' : ""}`}>
                  <div className='navbar-collapse-content'>
                      <ul className='navbar-nav'>
                          <li className='text-white'>
                              <Link to = "/">About</Link>
                          </li>
                          <li className='text-white'>
                              <Link to = "/">Features</Link>
                          </li>
                          <li className='text-white'>
                              <Link to = "/">Pricing</Link>
                          </li>
                          <li className='text-white'>
                              <Link to = "/">Contacts</Link>
                          </li>
                      </ul>
                      <ul className='navbar-social flex'>
                          <li className='text-white'>
                              <Link to = "/" className='flex flex-center'><FaTwitter /></Link>
                          </li>
                          <li className='text-white'>
                              <Link to = "/" className='flex flex-center'><FaSkype /></Link>
                          </li>
                          <li className='text-white'>
                              <Link to = "/" className='flex flex-center'><FaVimeoV /></Link>
                          </li>
                      </ul>
                      <div className='navbar-btns'>
                          <button type = "button" className='btn'><IoMdRocket /> <span>get started</span></button>
                      </div>
                  </div>
              </div>
              {/* <Route exact path="/" component={() => this.renderMain()} />
              <Route exact path="/contact" render={() => <h1>Contact Us</h1>} />
              <Route render={() => <h1>Page not found</h1>} /> */}
          </div>
      </div>
  </nav>
)
}

export default Navbar;