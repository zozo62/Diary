gdjs._26085_35352_25776_23531Code = {};
gdjs._26085_35352_25776_23531Code.localVariables = [];
gdjs._26085_35352_25776_23531Code.idToCallbackMap = new Map();
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects3= [];
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1= [];
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects2= [];
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects3= [];
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects1= [];
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects2= [];
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects3= [];


gdjs._26085_35352_25776_23531Code.userFunc0xc47a38 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
(function(runtimeScene) {
    // 1. 強制直接讀取你的全域變數 (Global Variables)
    // 這裡我們直接抓取你結構變數中的 Content 和 Mood
    var day = runtimeScene.getGame().getVariables().get("CurrentDay").getAsNumber().toString();
    var diaryData = runtimeScene.getGame().getVariables().get("DiaryData").getChild(day);
    
    var content = diaryData.getChild("Content").getAsString();
    var mood = diaryData.getChild("Mood").getAsString();
    
    // 組合要傳送的內容
    var fullText = "心情: " + mood + " | 內容: " + content;
    
    // 2. 編碼並發送
    var encodedText = btoa(unescape(encodeURIComponent(fullText)));
    const SCRIPT_URL = "/api/google-script-1";

    fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "text": encodedText })
    })
    .then(response => response.json())
    .then(data => {
        // 3. 更新全域變數，讓遊戲畫面顯示結果
        runtimeScene.getGame().getVariables().get("API_Response").setString(data.url);
        runtimeScene.getVariables().get("isSent").setNumber(1);
        
    })
    .catch(err => alert("網路錯誤: " + err.message));
})(runtimeScene);
};
gdjs._26085_35352_25776_23531Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("提交按鈕"), gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects2);


const objects = gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects2;
gdjs._26085_35352_25776_23531Code.userFunc0xc47a38(runtimeScene, objects);

}


};gdjs._26085_35352_25776_23531Code.asyncCallback12865804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._26085_35352_25776_23531Code.localVariables);

{ //Subevents
gdjs._26085_35352_25776_23531Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._26085_35352_25776_23531Code.localVariables.length = 0;
}
gdjs._26085_35352_25776_23531Code.idToCallbackMap.set(12865804, gdjs._26085_35352_25776_23531Code.asyncCallback12865804);
gdjs._26085_35352_25776_23531Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._26085_35352_25776_23531Code.localVariables);
for (const obj of gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1) asyncObjectsList.addObject("提交按鈕", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._26085_35352_25776_23531Code.asyncCallback12865804(runtimeScene, asyncObjectsList)), 12865804, asyncObjectsList);
}
}

}


};gdjs._26085_35352_25776_23531Code.eventsList2 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15662532);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("字數統計"), gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_平靜"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_生氣"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_開心"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_難過"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情標題"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1);
gdjs.copyArray(runtimeScene.getObjects("提交按鈕"), gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1);
gdjs.copyArray(runtimeScene.getObjects("日期顯示"), gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects1);
gdjs.copyArray(runtimeScene.getObjects("日記輸入框"), gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1);
gdjs.copyArray(runtimeScene.getObjects("玩家角色顯示"), gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1);
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects1[i].getBehavior("Text").setText("日記");
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)));
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1[i].setPlaceholder("今天發生了什麼事呢？寫下你的日記吧...");
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("返回按鈕"), gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1.length;i<l;++i) {
    if ( gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1[k] = gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1[i];
        ++k;
    }
}
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "月曆視圖", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("字數統計"), gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_平靜"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_生氣"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_開心"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情_難過"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1);
gdjs.copyArray(runtimeScene.getObjects("心情標題"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1);
gdjs.copyArray(runtimeScene.getObjects("提交按鈕"), gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1);
gdjs.copyArray(runtimeScene.getObjects("日記輸入框"), gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1);
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("提交按鈕"), gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1.length;i<l;++i) {
    if ( gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1[k] = gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1[i];
        ++k;
    }
}
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11176164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("日記輸入框"), gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content").setString((( gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length === 0 ) ? "" :gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1[0].getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Mood").setString("MoodSelection");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("DiaryData").getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("DiaryData").getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Mood")));
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("心情: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("DiaryData").getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Mood")) + " | 內容: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("DiaryData").getChild(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)))).getChild("Content")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}

{ //Subevents
gdjs._26085_35352_25776_23531Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("心情_開心"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1.length;i<l;++i) {
    if ( gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1[k] = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1[i];
        ++k;
    }
}
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("開心");
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))).getChild("Mood").setString("開心");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "視覺化場景", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("心情_難過"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1.length;i<l;++i) {
    if ( gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1[k] = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1[i];
        ++k;
    }
}
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("難過");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "視覺化場景", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))).getChild("Mood").setString("難過");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("心情_生氣"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1.length;i<l;++i) {
    if ( gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1[k] = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1[i];
        ++k;
    }
}
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("生氣");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "視覺化場景", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))).getChild("Mood").setString("生氣");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("心情_平靜"), gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1.length;i<l;++i) {
    if ( gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1[k] = gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1[i];
        ++k;
    }
}
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("平靜");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "視覺化場景", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))).getChild("Mood").setString("平靜");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("字數統計"), gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1);
gdjs.copyArray(runtimeScene.getObjects("日記輸入框"), gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1);
{for(var i = 0, len = gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1.length ;i < len;++i) {
    gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.string.strLen((( gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length === 0 ) ? "" :gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1[0].getText()))));
}
}
}

}


};

gdjs._26085_35352_25776_23531Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects3.length = 0;

gdjs._26085_35352_25776_23531Code.eventsList2(runtimeScene);
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9526399_9539023_9531034Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9526085_9535352_9536664_9520837_9526694Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9523383_9525976_9532113_9535336Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9525552_9520132_9525353_9537397Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9527161_9538988Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538283_9524515Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9538627_9536942Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9529983_9527683Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9524515_9524773_9595_9524179_9538748Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9536820_9522238_9525353_9537397Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects1.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects2.length = 0;
gdjs._26085_35352_25776_23531Code.GD_9529609_9523478_9535282_9533394_9539023_9531034Objects3.length = 0;
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs._26085_35352_25776_23531Code.GDBlackSquareDecoratedButtonObjects3.length = 0;


return;

}

gdjs['_26085_35352_25776_23531Code'] = gdjs._26085_35352_25776_23531Code;
