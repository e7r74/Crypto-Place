# 🪙 Crypto Place — Real-Time Crypto Tracker
A modern cryptocurrency tracking application that provides real-time market data using the **CoinGecko API**. Built with **React** and **Vite** for high performance and a smooth user experience.
## 🔗 Live Demo
Check out the live version of the project here: 
[https://crypto-place-zrwc.vercel.app/](https://crypto-place-zrwc.vercel.app/)

## 🚀 Features
* **Live Market Data:** Displays the top 100 cryptocurrencies with real-time price updates.
* **Detailed Coin Insights:** Access comprehensive data for each coin, including market cap, 24h high/low, and market rank.
* **Interactive Charts:** Visualize price trends over the last 10 days using `react-google-charts`.
* **Currency Switching:** Seamlessly switch between USD, EUR, and RUB.
* **Responsive Design:** Fully optimized for all screen sizes, from mobile devices to desktops.

## 🛠 Tech Stack
* **Frontend:** React.js (Vite)
* **State Management:** React Context API
* **Data Fetching:** Fetch API / Async-Await
* **Charts:** React Google Charts
* **Styling:** CSS3 (Flexbox & Grid)
* **Deployment:** Vercel

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/e7r74/Crypto-Place.git](https://github.com/e7r74/Crypto-Place.git)
   cd Crypto-Place
2. **Install dependencies::**
   ```bash
   npm install
**3. Configure Environment Variables**

Create a `.env` file in the root directory of the project and add your API key from CoinGecko:

    VITE_API_KEY=your_coingecko_api_key_here

**4. Start the development server**
   ```bash
   npm run dev