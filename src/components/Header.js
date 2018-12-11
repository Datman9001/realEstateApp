import React, { Component } from 'react'

class Header extends Component {
          render() {
          return (


          <div className='header'>
            <div className='logo'>
              <a href="/#">pararius<span>.nl</span></a>
              <small>huurwoningen</small>
          </div>
            <div className='nav'>
              <a href="/#">create ads</a>
              <a href="/#">About us</a>
              <a href="/#">Log in</a>
              <a href="/#" className='btn-nav'>Register</a>
            </div>
            <div className="nav-mobile">
              <i class="fas fa-bars"></i>
            </div>


          </div>

            )
      }
}

export default Header
