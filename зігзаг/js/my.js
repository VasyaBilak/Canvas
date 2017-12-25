var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext('2d');
ctx.strokeText("Зігзаг", 10, 10);
ctx.stroke();
ctx.lineWidth=10;
ctx.strokeStyle="green"
var x = [40, 70, 100, 130, 160, 190];
var y = [40, 80, 40, 80, 40, 80];
ctx.moveTo(10, 80);
ctx.beginPath();
for(var i = 0; i<x.length; i++){
    ctx.lineTo(x[i], y[i]);
}
ctx.stroke();