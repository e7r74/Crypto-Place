import { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/LineChart/LineChart'
import { API_KEY as localKey } from '../../Data'
const Coin = () => {
  const API_KEY = import.meta.env.VITE_API_KEY || localKey
  const { coinId } = useParams()
  const [coinData, setCoinData] = useState()
  const [historicalData, setHistoricalData] = useState()
  const { currency } = useContext(CoinContext)
  const coinDataFetch = async () => {
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': API_KEY } }

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err))
  }
  const historicalDataFetch = async () => {
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': API_KEY } }

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err))
  }
  //   useEffect(() => {
  //     historicalDataFetch()
  //   }, [currency])
  useEffect(() => {
    coinDataFetch()
    historicalDataFetch()
  }, [currency])

  if (!coinData || !historicalData) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }
  return (
    <div className="coin">
      {/* Группируем заголовок для удобного центрирования */}
      <div className="coin-header">
        <img src={coinData.image.large} alt="" />
        <h1>
          {coinData.name} - <span>{coinData.symbol.toUpperCase()}</span>
        </h1>
      </div>

      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>

      <div className="coin-info">
        <div className="coin-info-structre">
          <p>Crypto Market Rank</p>
          <p>{coinData.market_cap_rank}</p>
        </div>

        <div className="coin-info-structre">
          <p>Current Price</p>
          <p>
            {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
          </p>
        </div>

        <div className="coin-info-structre">
          <p>Market Cap</p>
          <p>
            {currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </p>
        </div>

        <div className="coin-info-structre">
          <p>24 Hour High</p>
          <p>
            {currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}
          </p>
        </div>

        <div className="coin-info-structre">
          <p>24 Hour Low</p>
          <p>
            {currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
