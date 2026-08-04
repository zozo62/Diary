const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'app')));

// ==========================================
// 代理第一個 Google Script 網址
// ==========================================
app.all('/api/google-script-1', async (req, res) => {
    const TARGET_URL = 'https://script.google.com/macros/s/AKfycbwbt2SqQZwlBj7NsWWJ1PKiTgSAv10OHZZu3kTKhmjVKBKKi80nZVXlrI8aiuZ6uIXmqw/exec';
    handleProxy(req, res, TARGET_URL);
});

// ==========================================
// 代理第二個 Google Script 網址
// ==========================================
app.all('/api/google-script-2', async (req, res) => {
    const TARGET_URL = 'https://script.google.com/macros/s/AKfycbyXWYytKKiWCgPAxSwLvSFFtjXwKKZyv8Xo8c5SkK7ecp0pVqk5Kk3ecfiJTUn-PJEytg/exec';
    handleProxy(req, res, TARGET_URL);
});

// 共用的轉發邏輯函式
async function handleProxy(req, res, targetUrl) {
    try {
        const method = req.method;
        const options = {
            method: method,
            headers: { 'Content-Type': 'application/json' }
        };

        if (method === 'POST') {
            options.body = JSON.stringify(req.body);
        }

        let fetchUrl = targetUrl;
        if (method === 'GET' && Object.keys(req.query).length > 0) {
            const queryString = new URLSearchParams(req.query).toString();
            fetchUrl = `${targetUrl}?${queryString}`;
        }

        const response = await fetch(fetchUrl, options);
        const data = await response.text();

        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (error) {
        console.error('代理轉發發生錯誤：', error);
        res.status(500).json({ success: false, error: error.message });
    }
}

app.listen(PORT, () => {
    console.log(`伺服器已在連接埠 ${PORT} 順利運行！`);
});