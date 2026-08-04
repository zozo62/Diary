gdjs._35222_35258_21270_22580_26223Code = {};
gdjs._35222_35258_21270_22580_26223Code.localVariables = [];
gdjs._35222_35258_21270_22580_26223Code.idToCallbackMap = new Map();
gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9527161_9538988_9525991_9523383Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9527161_9538988_9525991_9523383Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDBlackSquareDecoratedButtonObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDBlackSquareDecoratedButtonObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1= [];
gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects2= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1= [];
gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects2= [];


gdjs._35222_35258_21270_22580_26223Code.userFunc0xa70e40 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
(function(runtimeScene) {
    var url = runtimeScene.getGame().getVariables().get("API_Response").getAsString();
    var objs = runtimeScene.getObjects("Background");
    
    if (objs.length > 0 && url && url.startsWith("http")) {
        var bg = objs[0];
        
        // 使用 PIXI 載入資源
        var newTexture = PIXI.Texture.from(url);
        
        newTexture.baseTexture.on('loaded', function() {
            bg.getRendererObject().texture = newTexture;
            
            // --- 強制循環邏輯 ---
            // 取得渲染物件的來源，如果它是影片，我們直接存取其 HTMLVideoElement
            var rendererObj = bg.getRendererObject();
            if (rendererObj.texture && rendererObj.texture.baseTexture.resource && rendererObj.texture.baseTexture.resource.source) {
                var videoElement = rendererObj.texture.baseTexture.resource.source;
                if (videoElement.tagName === 'VIDEO') {
                    videoElement.loop = true; // 強制開啟循環
                    videoElement.play();      // 確保播放
                }
            }
            
            // --- 縮放設定 ---
            var gameWidth = runtimeScene.getGame().getGameResolutionWidth();
            var gameHeight = runtimeScene.getGame().getGameResolutionHeight();
            bg.setWidth(gameWidth);
            bg.setHeight(gameHeight);
        });
        
        if (newTexture.baseTexture.valid) {
            newTexture.baseTexture.emit('loaded');
        }
    }
})(runtimeScene);
};
gdjs._35222_35258_21270_22580_26223Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1 */

const objects = gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1;
gdjs._35222_35258_21270_22580_26223Code.userFunc0xa70e40(runtimeScene, objects);

}


};gdjs._35222_35258_21270_22580_26223Code.asyncCallback14886220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._35222_35258_21270_22580_26223Code.localVariables);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")), "Fung", 80, 80, 100, null);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typewriter");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0.23);
}
gdjs._35222_35258_21270_22580_26223Code.localVariables.length = 0;
}
gdjs._35222_35258_21270_22580_26223Code.idToCallbackMap.set(14886220, gdjs._35222_35258_21270_22580_26223Code.asyncCallback14886220);
gdjs._35222_35258_21270_22580_26223Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._35222_35258_21270_22580_26223Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._35222_35258_21270_22580_26223Code.asyncCallback14886220(runtimeScene, asyncObjectsList)), 14886220, asyncObjectsList);
}
}

}


};gdjs._35222_35258_21270_22580_26223Code.userFunc0xaa3740 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
(function(runtimeScene) {
    try {
        // 1. 取得目前日記內容
        var day = runtimeScene.getGame().getVariables().get("CurrentDay").getAsNumber().toString();
        var diaryData = runtimeScene.getGame().getVariables().get("DiaryData").getChild(day);
        
        var content = "";
        if (diaryData && diaryData.hasChild("Content")) {
            content = diaryData.getChild("Content").getAsString();
        }

        if (!content || content === "0" || content.trim() === "") {
            content = "今天天氣非常熱！";
        }
        
        // 2. 取得標準普通話音訊
        var encodedText = encodeURIComponent(content);
        var audioUrl = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + encodedText + "&tl=zh-CN&client=tw-ob";

        // 3. 使用 Web Audio API 載入並調整速度與音高
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        fetch(audioUrl)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                var source = audioContext.createBufferSource();
                source.buffer = audioBuffer;
                
                // ⚠️ 關鍵：把速度調快到 1.05，這樣說話速度就會恢復正常（甚至俐落一點），同時保有低沉的感覺！
                source.playbackRate.value = 0.85; 
                
                source.connect(audioContext.destination);
                source.start(0);
            })
            .catch(err => {
                // 如果瀏覽器擋音訊，退回一般播放
                var audio = new Audio(audioUrl);
                audio.play();
            });

    } catch (error) {
        alert("語音腳本錯誤: " + error.toString());
    }
})(runtimeScene);
};
gdjs._35222_35258_21270_22580_26223Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1 */

const objects = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1;
gdjs._35222_35258_21270_22580_26223Code.userFunc0xaa3740(runtimeScene, objects);

}


};gdjs._35222_35258_21270_22580_26223Code.userFunc0x9c7468 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
(function(runtimeScene) {
    try {
        // 1. 讀取日記內容
        var day = runtimeScene.getGame().getVariables().get("CurrentDay").getAsNumber().toString();
        var diaryData = runtimeScene.getGame().getVariables().get("DiaryData").getChild(day);
        
        var content = "";
        if (diaryData && diaryData.hasChild("Content")) {
            content = diaryData.getChild("Content").getAsString();
        }

        if (!content || content === "0" || content.trim() === "") {
            content = "今天看到路邊有許多樹木，但都是綠葉茂盛。";
        }
        
        var encodedText = btoa(unescape(encodeURIComponent(content)));
        
        // ⚠️ 請填入你的 Google Apps Script 網址
        const TRANSLATE_URL = "https://script.google.com/macros/s/AKfycbyXWYytKKiWCgPAxSwLvSFFtjXwKKZyv8Xo8c5SkK7ecp0pVqk5Kk3ecfiJTUn-PJEytg/exec";

        // 2. 發送請求
        fetch(TRANSLATE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "text": encodedText })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP 錯誤狀態碼: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            var finalResult = String(data.translation || "Translation Error");
            
            // 3. 成功取得翻譯，安全更新變數
            runtimeScene.getGame().getVariables().get("FullText").setString(finalResult);
            runtimeScene.getGame().getVariables().get("CharIndex").setNumber(1);
            runtimeScene.getGame().getVariables().get("IsTranslated").setNumber(1);
            
            // 如果你原本在 GDevelop 事件裡有設定計時器歸零，可以透過變數通知，這裡就不在 JS 裡強制調用有問題的函式
        })
       

    } catch (error) {
        alert("腳本嚴重崩潰: " + error.toString());
    }
})(runtimeScene);
};
gdjs._35222_35258_21270_22580_26223Code.asyncCallback14876820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._35222_35258_21270_22580_26223Code.localVariables);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), "Daniel", 80, 80, 100, null);
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typewriter");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0.08);
}
gdjs._35222_35258_21270_22580_26223Code.localVariables.length = 0;
}
gdjs._35222_35258_21270_22580_26223Code.idToCallbackMap.set(14876820, gdjs._35222_35258_21270_22580_26223Code.asyncCallback14876820);
gdjs._35222_35258_21270_22580_26223Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._35222_35258_21270_22580_26223Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._35222_35258_21270_22580_26223Code.asyncCallback14876820(runtimeScene, asyncObjectsList)), 14876820, asyncObjectsList);
}
}

}


};gdjs._35222_35258_21270_22580_26223Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1, gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects2);


const objects = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects2;
gdjs._35222_35258_21270_22580_26223Code.userFunc0x9c7468(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs._35222_35258_21270_22580_26223Code.userFunc0x9ffd90 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function(runtimeScene) {
    try {
        // 1. 取得目前日記內容
        var day = runtimeScene.getGame().getVariables().get("CurrentDay").getAsNumber().toString();
        var diaryData = runtimeScene.getGame().getVariables().get("DiaryData").getChild(day);
        
        var content = "";
        if (diaryData && diaryData.hasChild("Content")) {
            content = diaryData.getChild("Content").getAsString();
        }

        if (!content || content === "0" || content.trim() === "") {
            content = "今天天氣非常熱！";
        }
        
        // 2. 使用 Google 翻譯的語音 API 產生標準普通話 (tl=zh-CN)
        var encodedText = encodeURIComponent(content);
        var audioUrl = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + encodedText + "&tl=zh-CN&client=tw-ob";

        // 3. 直接播放該語音檔案
        var audio = new Audio(audioUrl);
        audio.play().catch(err => {
            alert("播放失敗，請點擊一下畫面再試一次: " + err.message);
        });

    } catch (error) {
        alert("語音腳本錯誤: " + error.toString());
    }
})(runtimeScene);
};
gdjs._35222_35258_21270_22580_26223Code.eventsList5 = function(runtimeScene) {

{


gdjs._35222_35258_21270_22580_26223Code.userFunc0x9ffd90(runtimeScene);

}


};gdjs._35222_35258_21270_22580_26223Code.userFunc0x9fe758 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
(function(runtimeScene) {
    try {
        // 1. 讀取日記內容
        var day = runtimeScene.getGame().getVariables().get("CurrentDay").getAsNumber().toString();
        var diaryData = runtimeScene.getGame().getVariables().get("DiaryData").getChild(day);
        
        var content = "";
        if (diaryData && diaryData.hasChild("Content")) {
            content = diaryData.getChild("Content").getAsString();
        }

        if (!content || content === "0" || content.trim() === "") {
            content = "今天看到路邊有許多樹木，但都是綠葉茂盛。";
        }
        
        var encodedText = btoa(unescape(encodeURIComponent(content)));
        
        // ⚠️ 請填入你的 Google Apps Script 網址
        const TRANSLATE_URL = "https://script.google.com/macros/s/AKfycbyXWYytKKiWCgPAxSwLvSFFtjXwKKZyv8Xo8c5SkK7ecp0pVqk5Kk3ecfiJTUn-PJEytg/exec";

        // 2. 發送請求
        fetch(TRANSLATE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "text": encodedText })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP 錯誤狀態碼: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            var finalResult = String(data.translation || "Translation Error");
            
            // 3. 成功取得翻譯，安全更新變數
            runtimeScene.getGame().getVariables().get("FullText").setString(finalResult);
            runtimeScene.getGame().getVariables().get("CharIndex").setNumber(1);
            runtimeScene.getGame().getVariables().get("IsTranslated").setNumber(1);
            
            // 如果你原本在 GDevelop 事件裡有設定計時器歸零，可以透過變數通知，這裡就不在 JS 裡強制調用有問題的函式
        })
        

    } catch (error) {
        alert("腳本嚴重崩潰: " + error.toString());
    }
})(runtimeScene);
};
gdjs._35222_35258_21270_22580_26223Code.asyncCallback14871524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._35222_35258_21270_22580_26223Code.localVariables);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), "Karen", 80, 80, 100, null);
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typewriter");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0.055);
}
gdjs._35222_35258_21270_22580_26223Code.localVariables.length = 0;
}
gdjs._35222_35258_21270_22580_26223Code.idToCallbackMap.set(14871524, gdjs._35222_35258_21270_22580_26223Code.asyncCallback14871524);
gdjs._35222_35258_21270_22580_26223Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._35222_35258_21270_22580_26223Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._35222_35258_21270_22580_26223Code.asyncCallback14871524(runtimeScene, asyncObjectsList)), 14871524, asyncObjectsList);
}
}

}


};gdjs._35222_35258_21270_22580_26223Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1, gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects2);


const objects = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects2;
gdjs._35222_35258_21270_22580_26223Code.userFunc0x9fe758(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14872060);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs._35222_35258_21270_22580_26223Code.userFunc0x11d9080 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
(function(runtimeScene) {
    try {
        var canvas = document.querySelector('canvas');
        if (!canvas) {
            alert("找不到遊戲畫布！");
            return;
        }

        var canvasStream = canvas.captureStream(30);

        // 同時向系統請求麥克風語音權限
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(micStream) {
            var combinedStream = new MediaStream([
                ...canvasStream.getVideoTracks(),
                ...micStream.getAudioTracks()
            ]);

            window.recordedChunks = [];
            window.myMediaRecorder = new MediaRecorder(combinedStream, { mimeType: 'video/webm' });

            window.myMediaRecorder.ondataavailable = function(event) {
                if (event.data.size > 0) {
                    window.recordedChunks.push(event.data);
                }
            };

            window.myMediaRecorder.start(100);
            window.recordingStartTime = Date.now();

            try {
                runtimeScene.getGame().getVariables().get("IsRecording").setValue(1);
            } catch (e) {
                runtimeScene.getVariables().get("IsRecording").setValue(1);
            }

            console.log("【版本 A】畫面 + 麥克風語音錄製啟動");
        }).catch(function(err) {
            alert("需要允許麥克風權限才能收音！錯誤: " + err.toString());
        });

    } catch (error) {
        alert("開始錄影發生錯誤: " + error.toString());
    }
})(runtimeScene);
};
gdjs._35222_35258_21270_22580_26223Code.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1 */

const objects = gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1;
gdjs._35222_35258_21270_22580_26223Code.userFunc0x11d9080(runtimeScene, objects);

}


};gdjs._35222_35258_21270_22580_26223Code.userFunc0xaa3600 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
(function(runtimeScene) {
    try {
        if (!window.myMediaRecorder || window.myMediaRecorder.state === "inactive") {
            alert("目前沒有正在進行的錄影！");
            return;
        }

        var elapsed = Date.now() - (window.recordingStartTime || 0);
        if (elapsed < 1000) {
            console.log("錄影時間太短，請稍候再按儲存！");
            return;
        }

        window.myMediaRecorder.stop();

        window.myMediaRecorder.onstop = function(e) {
            // 💡 關鍵修正：強制改用標準的 webm 格式，徹底避開 QuickTime 的挑剔不相容問題
            var blob = new Blob(window.recordedChunks, { type: 'video/webm' });
            
            if (blob.size === 0) {
                alert("錯誤：錄到的影片大小為 0！");
                return;
            }

            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Diary.webm'; // 儲存為 100% 相容的 webm 檔
            
            document.body.appendChild(a);
            a.click();
            
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);

            console.log("【JS】影音檔案下載成功！大小: " + blob.size);
        };

        try {
            runtimeScene.getGame().getVariables().get("IsRecording").setValue(0);
        } catch (e) {
            runtimeScene.getVariables().get("IsRecording").setValue(0);
        }

        console.log("【JS】停止錄影，IsRecording = 0");
    } catch (error) {
        alert("儲存影片發生錯誤: " + error.toString());
    }
})(runtimeScene);
};
gdjs._35222_35258_21270_22580_26223Code.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1 */

const objects = gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1;
gdjs._35222_35258_21270_22580_26223Code.userFunc0xaa3600(runtimeScene, objects);

}


};gdjs._35222_35258_21270_22580_26223Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content").getAsString() == runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content").getAsString());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14872676);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("CHI_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("CHI_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Can_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Can_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("ENG_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ENG_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("心情顯示"), gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects1);
gdjs.copyArray(runtimeScene.getObjects("暫停_儲存"), gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1);
gdjs.copyArray(runtimeScene.getObjects("玩家角色顯示"), gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1);
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects1[i].getBehavior("Text").setText("今日心情：" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1[i].hide();
}
}

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("返回月曆按鈕"), gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1[k] = gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "月曆視圖", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("重新撰寫按鈕"), gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1[k] = gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "日記撰寫", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects1);
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)), 45));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Typewriter") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typewriter");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_Voice_Boy1"), gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14884684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CHI_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Can_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ENG_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1);
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Can_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14886012);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CHI_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14889068);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typewriter");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0.46);
}

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ENG_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14893844);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_Voice_Girl1"), gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14877156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CHI_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Can_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("ENG_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1);
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Can_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14887140);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")), "善怡", 80, 80, 100, null);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typewriter");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0.28);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CHI_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14893428);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typewriter");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0.33);
}

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ENG_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14878724);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14899420);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Btn_Voice_Boy1"), gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn_Voice_Girl1"), gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1);
gdjs.copyArray(runtimeScene.getObjects("CHI_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("CHI_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Can_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Can_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("ENG_Boy"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ENG_Girl"), gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1);
/* Reuse gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("暫停_儲存"), gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1);
gdjs.copyArray(runtimeScene.getObjects("返回月曆按鈕"), gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1);
gdjs.copyArray(runtimeScene.getObjects("重新撰寫按鈕"), gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1);
gdjs.copyArray(runtimeScene.getObjects("錄製"), gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1);
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1[i].hide(false);
}
}

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1.length;i<l;++i) {
    if ( gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1[k] = gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1[i];
        ++k;
    }
}
gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14903828);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Btn_Voice_Boy1"), gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn_Voice_Girl1"), gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1);
/* Reuse gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("暫停_儲存"), gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1);
gdjs.copyArray(runtimeScene.getObjects("返回月曆按鈕"), gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1);
gdjs.copyArray(runtimeScene.getObjects("重新撰寫按鈕"), gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1);
gdjs.copyArray(runtimeScene.getObjects("錄製"), gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1);
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1.length ;i < len;++i) {
    gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1[i].hide();
}
}

{ //Subevents
gdjs._35222_35258_21270_22580_26223Code.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs._35222_35258_21270_22580_26223Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9527161_9538988_9525991_9523383Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9527161_9538988_9525991_9523383Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects2.length = 0;

gdjs._35222_35258_21270_22580_26223Code.eventsList10(runtimeScene);
gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBackgroundObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9527161_9538988_9525991_9523383Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9527161_9538988_9525991_9523383Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9524515_9524773_9539023_9531034Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9536820_9522238_9526376_9526310_9525353_9537397Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537325_9526032_9525776_9523531_9525353_9537397Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Boy1Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBtn_9595Voice_9595Girl1Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDStartButtonObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9537636_9535069Objects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSubtitleTextObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595BoyObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595BoyObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595BoyObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCan_9595GirlObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDCHI_9595GirlObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDENG_9595GirlObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GDSaveButtonObjects2.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects1.length = 0;
gdjs._35222_35258_21270_22580_26223Code.GD_9526283_9520572_9595_9520786_9523384Objects2.length = 0;


return;

}

gdjs['_35222_35258_21270_22580_26223Code'] = gdjs._35222_35258_21270_22580_26223Code;
