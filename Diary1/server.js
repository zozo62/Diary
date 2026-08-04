const express = require('express');
const path = require('path');
const { EdgeTTS } = require('node-edge-tts'); // 記得要先在 Render 裝這個套件
const fs = require('fs');

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
// 3. 代理 Google 語音 TTS 請求（你原本的舊版）
// ==========================================
app.all('/api/tts', async (req, res) => {
    const TARGET_URL = 'https://translate.google.com/translate_tts';
    handleProxy(req, res, TARGET_URL);
});

// ==========================================
// 4. 新增：微軟 Edge AI 語音路由（安全並存）
// ==========================================
app.get('/api/edge-tts', async (req, res) => {
    try {
        const text = req.query.q || "Hello";
        const gender = req.query.gender || "female"; // "male" 或 "female"
        const lang = req.query.tl || "zh-HK";        // 語言

        let voice = "zh-HK-HiuMaanNeural"; // 預設廣東話女聲

        if (lang.includes("zh-CN")) {
            voice = (gender === "male") ? "zh-CN-YunxiNeural" : "zh-CN-XiaoxiaoNeural";
        } else if (lang.includes("zh-HK")) {
            voice = (gender === "male") ? "zh-HK-WanLungNeural" : "zh-HK-HiuMaanNeural";
        } else if (lang.includes("en")) {
            voice = (gender === "male") ? "en-US-RyanMultilingualNeural" : "en-US-AriaNeural";
        }

        const filePath = path.join(__dirname, `temp_${Date.now()}.mp3`);
        const tts = new EdgeTTS({
            voice: voice,
            outputFormat: "audio-24khz-96kbitrate-mono-mp3"
        });

        await tts.ttsPromise(text, filePath);

        res.setHeader('Content-Type', 'audio/mpeg');
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

        fileStream.on('close', () => {
            fs.unlink(filePath, (err) => {
                if (err) console.error("清理暫存檔失敗：", err);
            });
        });
    } catch (error) {
        console.error('Edge TTS 發生錯誤：', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// 共用的轉發邏輯函式
async function handleProxy(req, res, targetUrl) {
    try {
        const method = req.method;
        const options = {
            method: method,
            headers: {
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
            const separator = targetUrl.includes('?') ? '&' : '?';
            fetchUrl = `${targetUrl}${separator}${queryString}`;
        }

        const response = await fetch(fetchUrl, options);
        const buffer = await response.arrayBuffer();

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