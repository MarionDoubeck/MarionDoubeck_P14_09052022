import React from 'react'
import logo from '../../styles/logoHeader.png'
import logoLink from '../../styles/logo.png'

const Header = () => {

    const url = window.location.href
    const link = url === 'http://localhost:3000/employees-list' ?
      <a href='/'>Create employee</a> :
      <a href='/employees-list'>Current employees</a> 
      
  return (
    <header>
        <img src={logo} alt="logo" />
        <h1>HRnet</h1>
        <div className='nav'>
          <span className='link'>{link}</span>
          <img src={logoLink} alt="logo" id='logoLink'></img>
        </div>
    </header>
  )
}

export default Header