const express = require('express');
const path = require('path');
const app = express();

// 讓伺服器可以讀取你 app 資料夾裡面的網頁檔案
app.use(express.static(path.join(__dirname, 'app')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`雲端伺服器已在 port ${PORT} 啟動`);
});