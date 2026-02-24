import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Home = () => {
  const { allCoin, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])
  const [input, setInput] = useState('')
  const inputHandler = (event) => {
    setInput(event.target.value)
    if (event.target.value === '') {
      setDisplayCoin(allCoin)
    }
  }
  const searchHandler = (event) => {
    event.preventDefault()
    const coins = allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }
  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])
  return (
    <div className="home">
      <div className="hero">
        <h1>Crypto Market</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>

        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinList"
            value={input}
            type="text"
            placeholder="Search crypto..."
            required
          />
          <datalist id="coinList">
            {allCoin.map((item, index) => (
              <option value={item.name} key={index} />
            ))}
          </datalist>
          <button>Search</button>
        </form>
      </div>
      <div className="table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className="market-cap">Market Map</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{index + 1}</p>
            <p>
              {item.name} - <span style={{ color: '#7927ff' }}>{item.symbol}</span>
            </p>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>

            <p className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
            <p></p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
