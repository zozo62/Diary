gdjs._35282_33394_36984_25799Code = {};
gdjs._35282_33394_36984_25799Code.localVariables = [];
gdjs._35282_33394_36984_25799Code.idToCallbackMap = new Map();
gdjs._35282_33394_36984_25799Code.GD_9527161_9538988_9525991_9523383Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9527161_9538988_9525991_9523383Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9527161_9531844Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9527161_9531844Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9536664_9520837_9526694Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9536664_9520837_9526694Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007_9595_9527161_9531844Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007_9595_9527161_9531844Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007_9595_9527161_9531844Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007_9595_9527161_9531844Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899_9595_9527161_9531844Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899_9595_9527161_9531844Objects2= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899_9595_9527161_9531844Objects1= [];
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899_9595_9527161_9531844Objects2= [];
gdjs._35282_33394_36984_25799Code.GDRedButtonObjects1= [];
gdjs._35282_33394_36984_25799Code.GDRedButtonObjects2= [];


gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394A_95959595_95959530007Objects1Objects = Hashtable.newFrom({"角色A_男": gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1});
gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394B_95959595_95959530007Objects1Objects = Hashtable.newFrom({"角色B_男": gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1});
gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394C_95959595_95959522899Objects1Objects = Hashtable.newFrom({"角色C_女": gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1});
gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394D_95959595_95959522899Objects1Objects = Hashtable.newFrom({"角色D_女": gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1});
gdjs._35282_33394_36984_25799Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14714540);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("角色A_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色B_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色C_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色D_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(-1);
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("角色A_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394A_95959595_95959530007Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1 */
gdjs.copyArray(runtimeScene.getObjects("角色B_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色C_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色D_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("角色B_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394B_95959595_95959530007Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("角色A_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1);
/* Reuse gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1 */
gdjs.copyArray(runtimeScene.getObjects("角色C_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色D_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(2);
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("角色C_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394C_95959595_95959522899Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("角色A_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色B_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1);
/* Reuse gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1 */
gdjs.copyArray(runtimeScene.getObjects("角色D_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(3);
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("角色D_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._35282_33394_36984_25799Code.mapOfGDgdjs_9546_959535282_959533394_959536984_959525799Code_9546GD_95959535282_95959533394D_95959595_95959522899Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("角色A_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色B_男"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1);
gdjs.copyArray(runtimeScene.getObjects("角色C_女"), gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1);
/* Reuse gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(4);
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{for(var i = 0, len = gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1.length ;i < len;++i) {
    gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("確認按鈕"), gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1.length;i<l;++i) {
    if ( gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1[k] = gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1[i];
        ++k;
    }
}
gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Name").setString("PLACEHOLDER_NAME");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "月曆視圖", true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._35282_33394_36984_25799Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35282_33394_36984_25799Code.GD_9527161_9538988_9525991_9523383Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9527161_9538988_9525991_9523383Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9536664_9520837_9526694Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9536664_9520837_9526694Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GDRedButtonObjects1.length = 0;
gdjs._35282_33394_36984_25799Code.GDRedButtonObjects2.length = 0;

gdjs._35282_33394_36984_25799Code.eventsList0(runtimeScene);
gdjs._35282_33394_36984_25799Code.GD_9527161_9538988_9525991_9523383Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9527161_9538988_9525991_9523383Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9536664_9520837_9526694Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9522995_9521517_9536664_9520837_9526694Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9530906_9535469_9525353_9537397Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394A_9595_9530007_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394B_9595_9530007_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394C_9595_9522899_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899_9595_9527161_9531844Objects1.length = 0;
gdjs._35282_33394_36984_25799Code.GD_9535282_9533394D_9595_9522899_9595_9527161_9531844Objects2.length = 0;
gdjs._35282_33394_36984_25799Code.GDRedButtonObjects1.length = 0;
gdjs._35282_33394_36984_25799Code.GDRedButtonObjects2.length = 0;


return;

}

gdjs['_35282_33394_36984_25799Code'] = gdjs._35282_33394_36984_25799Code;
