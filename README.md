# Binance Market Data WebSocket Implementation

This project implements real-time market data visualization for selected cryptocurrencies using Binance's WebSocket API. It provides an interactive candlestick chart for the following cryptocurrency pairs: **ETH/USDT**, **BNB/USDT**, and **DOT/USDT**. Users can toggle between different timeframes and currencies with historical data persistence for smooth transitions.

## Features

### 1. Connect to Binance WebSocket
- Uses Binance's WebSocket to fetch real-time candlestick data for specific cryptocurrency pairs.
- The WebSocket URL format:  
  `wss://stream.binance.com:9443/ws/<symbol>@kline_<interval>`

### 2. Cryptocurrency Toggle
- A selection dropdown allows the user to switch between **ETH/USDT**, **BNB/USDT**, and **DOT/USDT**.
- Historical chart data is retained even after switching between different coins using local storage or in-memory storage.

### 3. Chart Visualization
- Displays a live candlestick chart using libraries such as **Chart.js** or **TradingView Charts**.
- Real-time updates for each selected cryptocurrency.
- Historical data persists during chart toggling without any loss or reloading of information.

### 4. Timeframe Selection
- Users can switch between **1-minute**, **3-minute**, and **5-minute** intervals for candlestick charts.

### 5. Data Persistence
- Candlestick data for each cryptocurrency is stored locally or in memory to ensure the chart is restored when switching between coins.
- New WebSocket messages update the chart in real time.

### 6. User Interface
- A clean, responsive UI allows easy toggling between different coins and time intervals.
- Real-time chart updates display seamlessly, ensuring no flicker or data loss.


