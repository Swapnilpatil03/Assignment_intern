const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to Binance WebSocket for multiple coin pairs
// Define the supported time frames and their corresponding Binance intervals
const timeFrames = ['1m', '3m', '5m'];
const coinPairs = ['bnbusdt', 'ethusdt', 'dotusdt'];

coinPairs.forEach((pair) => {
    timeFrames.forEach((timeFrame) => {
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${pair}@kline_${timeFrame}`);

        ws.on('message', (data) => {
            const candleData = JSON.parse(data).k;
            const newCandle = {
                t: new Date(candleData.t),
                o: parseFloat(candleData.o),
                h: parseFloat(candleData.h),
                l: parseFloat(candleData.l),
                c: parseFloat(candleData.c),
                symbol: pair.toUpperCase(),
                timeFrame: timeFrame
            };
            io.emit('newCandle', newCandle); // Send candle data to clients
        });
    });
});



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
