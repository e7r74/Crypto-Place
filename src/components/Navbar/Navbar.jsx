import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Loga.png'
import './Navbar.css'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)
  const currecyHandler = (event) => {
    switch (event.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' })
        break
      }
      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' })
        break
      }
      case 'rub': {
        setCurrency({ name: 'rub', symbol: '₽' })
        break
      }
      default: {
        setCurrency({ name: 'usd', symbol: '$' })
        break
      }
    }
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currecyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="rub">RUB</option>
        </select>
        <button>Sing up</button>
      </div>
    </div>
  )
}

export default Navbar
