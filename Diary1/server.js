const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'app')));

// ==========================================
// 1. 代理第一個 Google Script 網址
// ==========================================
app.all('/api/google-script-1', async (req, res) => {
    const TARGET_URL = 'https://script.google.com/macros/s/AKfycbwbt2SqQZwlBj7NsWWJ1PKiTgSAv10OHZZu3kTKhmjVKBKKi80nZVXlrI8aiuZ6uIXmqw/exec';
    handleProxy(req, res, TARGET_URL);
});

// ==========================================
// 2. 代理第二個 Google Script 網址
// ==========================================
app.all('/api/google-script-2', async (req, res) => {
    const TARGET_URL = 'https://script.google.com/macros/s/AKfycbyXWYytKKiWCgPAxSwLvSFFtjXwKKZyv8Xo8c5SkK7ecp0pVqk5Kk3ecfiJTUn-PJEytg/exec';
    handleProxy(req, res, TARGET_URL);
});

// ==========================================
// 3. 新增：代理 Google 語音 TTS 請求
// ==========================================
app.all('/api/tts', async (req, res) => {
    const TARGET_URL = 'https://translate.google.com/translate_tts';
    handleProxy(req, res, TARGET_URL);
});

// 共用的轉發邏輯函式
async function handleProxy(req, res, targetUrl) {
    try {
        const method = req.method;
        const options = {
            method: method,
            headers: {
                // 模擬瀏覽器 User-Agent，避免 Google 語音請求被拒絕
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        };

        if (method === 'POST') {
            options.body = JSON.stringify(req.body);
            options.headers['Content-Type'] = 'application/json';
        }

        let fetchUrl = targetUrl;
        if (Object.keys(req.query).length > 0) {
            const queryString = new URLSearchParams(req.query).toString();
            fetchUrl = `${targetUrl}?${queryString}`;
        }

        const response = await fetch(fetchUrl, options);
        const buffer = await response.arrayBuffer();

        // 把 Google 回傳的語音音訊或資料直接轉交給前端
        res.setHeader('Content-Type', response.headers.get('content-type') || 'audio/mpeg');
        res.send(Buffer.from(buffer));
    } catch (error) {
        console.error('代理轉發發生錯誤：', error);
        res.status(500).json({ success: false, error: error.message });
    }
}

app.listen(PORT, () => {
    console.log(`伺服器已在連接埠 ${PORT} 順利運行！`);
});