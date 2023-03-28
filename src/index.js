import { createPolygon, createFiveStar, createCagePalette, createGradientPalette, createRoundedRect, createLeaf, createSector, } from "./utils/util";

window.onload = function () {
    const canvasWrapper = document.querySelector(".canvas-wrapper");
    drawBWImage(canvasWrapper);
    drawReverseImage(canvasWrapper);
    drawRainbow(canvasWrapper);
    drawGraph(canvasWrapper);
    drawPattern(canvasWrapper);
    drawImage(canvasWrapper);
    drawPolygon(canvasWrapper);
    drawFiveStar(canvasWrapper);
    drawCagePalette(canvasWrapper);
    drawGradientPalette(canvasWrapper);
    drawRound(canvasWrapper);
    drawRoundedRect(canvasWrapper);
    drawLeaf(canvasWrapper);
    drawSector(canvasWrapper);
};

// 图片黑白效果
function drawBWImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas13');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 10, 10);
        const imgData = ctx.getImageData(0, 0, 150, 120);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            let average = (data[i + 0] + data[i + 1] + data[i + 2] + data[i + 3]) / 3;
            data[i + 0] = average;
            data[i + 1] = average;
            data[i + 2] = average;
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 图片反转效果
function drawReverseImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas13');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 10, 10);
        const imgData = ctx.getImageData(0, 0, 150, 120);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i + 0] = 255 - data[i + 0];
            data[i + 1] = 255 - data[i + 1];
            data[i + 2] = 255 - data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 绘制彩虹
function drawRainbow (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas12');
    const ctx = canvas.getContext('2d');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
    ctx.lineWidth = 12;
    ctx.translate(50, 0);
    for (let i = 0, len = colors.length; i < len; i++) {
        ctx.translate(0, 10);
        ctx.strokeStyle = colors[i];
        ctx.beginPath();
        ctx.arc(50, 100, 100, 0, 180 * Math.PI / 180, true);
        ctx.stroke();
    }
}

// 绘制变形图案
function drawGraph (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas11');
    const ctx = canvas.getContext('2d');
    ctx.translate(150, 0);
    ctx.fillStyle = 'rgba(255,0,0,0.25)';
    for (let i = 0; i < 50; i++) {
        ctx.translate(25, 25);
        ctx.scale(0.95, 0.95);
        ctx.rotate(Math.PI / 10);
        ctx.fillRect(0, 0, 100, 50);
    }
}

// 平铺canvas图案
function drawPattern (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas10');
    const ctx = canvas.getContext('2d');
    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = 20;
    bgCanvas.height = 20;
    const bgCtx = bgCanvas.getContext('2d');
    bgCtx.beginPath();
    bgCtx.arc(10, 10, 10, 0, 360 * Math.PI / 180, true);
    bgCtx.closePath();
    bgCtx.fillStyle = 'HotPink';
    bgCtx.fill();
    const pattern = ctx.createPattern(bgCanvas, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 200, 200);
}

// 绘制图片
function drawImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas9');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = "src/static/images/bvb.png";
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 200, 150, 50, 25, 100, 100);
    };
}

// 绘制正多边形
function drawPolygon (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas8');
    const ctx = canvas.getContext('2d');
    createPolygon(ctx, 3, 100, 75, 50);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

// 绘制五角星
function drawFiveStar (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas7');
    const ctx = canvas.getContext('2d');
    createFiveStar(ctx);
}

// 绘制方格调色板
function drawCagePalette (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas6');
    const ctx = canvas.getContext('2d');
    createCagePalette(ctx);
}

// 绘制渐变调色板
function drawGradientPalette (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas5');
    const ctx = canvas.getContext('2d');
    createGradientPalette(ctx, canvas.height);
}

// 绘制圆形
function drawRound (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas4');
    const ctx = canvas.getContext('2d');
    // 半圆
    ctx.beginPath();
    ctx.arc(80, 80, 50, 0, 180 * Math.PI / 180, true);
    ctx.closePath();
    ctx.fillStyle = "HotPink";
    ctx.fill();
    // 整圆
    ctx.beginPath();
    ctx.arc(120, 80, 50, 0, 360 * Math.PI / 180, true);
    ctx.closePath();
    ctx.fillStyle = "#9966ff";
    ctx.fill();
}

// 绘制圆角矩形
function drawRoundedRect (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas3');
    const ctx = canvas.getContext('2d');
    createRoundedRect(ctx, 100, 100, 20, 20, 20);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

// 绘制N叶草
function drawLeaf (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas2');
    const ctx = canvas.getContext('2d');
    createLeaf(ctx, 4, canvas.width / 2, canvas.height / 2, 20, 80);
    ctx.fillStyle = "#00ff99";
    ctx.fill();
}

// 绘制扇形
function drawSector (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas1');
    const ctx = canvas.getContext('2d');
    createSector(ctx, canvas.width / 2, canvas.height / 2, 50, 30, 120);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

function createEle (canvasWrapper) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '200');
    canvas.setAttribute('height', '150');
    canvas.style.border = '1px dashed gray';
    canvasWrapper.appendChild(canvas);
    return canvas;
}