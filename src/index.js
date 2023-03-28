import { createPolygon, createFiveStar, createCagePalette, createGradientPalette, createRoundedRect, createLeaf, createSector, } from "./utils/util";

window.onload = function () {
    const canvasWrapper = document.querySelector(".canvas-wrapper");
    drawLinearGradient(canvasWrapper);
    drawTransparentImage(canvasWrapper);
    drawMaskImage(canvasWrapper);
    drawSepiaImage(canvasWrapper);
    drawBrightnessImage(canvasWrapper);
    drawGrayScaleImage(canvasWrapper);
    drawAverageImage(canvasWrapper);
    drawReverseImage(canvasWrapper);
    drawImage(canvasWrapper);
    drawRainbow(canvasWrapper);
    drawGraph(canvasWrapper);
    drawPattern(canvasWrapper);
    drawPolygon(canvasWrapper);
    drawFiveStar(canvasWrapper);
    drawCagePalette(canvasWrapper);
    drawGradientPalette(canvasWrapper);
    drawRound(canvasWrapper);
    drawRoundedRect(canvasWrapper);
    drawLeaf(canvasWrapper);
    drawSector(canvasWrapper);
};

// 绘制渐变效果
function drawLinearGradient (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    const ctx = canvas.getContext('2d');
    let text = '中华诗词网';
    ctx.font = 'bold 30px 微软雅黑';
    const gnt = ctx.createLinearGradient(0, 0, 150, 100);
    gnt.addColorStop(0, 'HotPink');
    gnt.addColorStop(1, 'LightSkyBlue');
    ctx.fillStyle = gnt;
    ctx.fillText(text, 25, 85);
}
// 图片透明效果
function drawTransparentImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('title', '透明');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 200, 150);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i + 3] = data[i + 3] * 0.5;
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 图片蒙版效果
function drawMaskImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('title', '蒙版');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 200, 150);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i + 0];
            let g = data[i + 1];
            let b = data[i + 2];
            let average = (r + g + b) / 3;
            data[i + 0] = average;
            data[i + 1] = 0;
            data[i + 2] = 0;
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 图片复古效果
function drawSepiaImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('title', '复古');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 200, 150);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i + 0];
            let g = data[i + 1];
            let b = data[i + 2];
            data[i + 0] += r * 0.39 + g * 0.76 + b * 0.18;
            data[i + 1] += r * 0.35 + g * 0.68 + b * 0.16;
            data[i + 2] += r * 0.27 + g * 0.53 + b * 0.13;
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 图片亮度效果
function drawBrightnessImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('title', '亮度');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 200, 150);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            let brightness = 100;
            data[i + 0] += brightness;
            data[i + 1] += brightness;
            data[i + 2] += brightness;
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 图片黑白效果（加权）
function drawGrayScaleImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('title', '黑白（加权）');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 200, 150);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            let grayscale = data[i] * 0.3 + data[i] * 0.6 + data[i + 2] * 0.1;
            data[i + 0] = grayscale;
            data[i + 1] = grayscale;
            data[i + 2] = grayscale;
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 图片黑白效果（平均）
function drawAverageImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('title', '黑白（平均）');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 200, 150);
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
    canvas.setAttribute('title', '反转');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'src/static/images/bvb.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 200, 150);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i + 0] = 255 - data[i + 0];
            data[i + 1] = 255 - data[i + 1];
            data[i + 2] = 255 - data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    };
}

// 绘制图片
function drawImage (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('title', '原图');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = "src/static/images/bvb.png";
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 200, 150, 0, 0, 200, 150);
    };
}

// 绘制彩虹
function drawRainbow (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
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

// 绘制正多边形
function drawPolygon (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    const ctx = canvas.getContext('2d');
    createPolygon(ctx, 3, 100, 75, 50);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

// 绘制五角星
function drawFiveStar (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    const ctx = canvas.getContext('2d');
    createFiveStar(ctx);
}

// 绘制方格调色板
function drawCagePalette (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    const ctx = canvas.getContext('2d');
    createCagePalette(ctx);
}

// 绘制渐变调色板
function drawGradientPalette (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    const ctx = canvas.getContext('2d');
    createGradientPalette(ctx, canvas.height);
}

// 绘制圆形
function drawRound (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
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
    const ctx = canvas.getContext('2d');
    createRoundedRect(ctx, 100, 100, 20, 20, 20);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

// 绘制N叶草
function drawLeaf (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    const ctx = canvas.getContext('2d');
    createLeaf(ctx, 4, canvas.width / 2, canvas.height / 2, 20, 80);
    ctx.fillStyle = "#00ff99";
    ctx.fill();
}

// 绘制扇形
function drawSector (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
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
    canvas.style.borderRadius = "8px";
    canvasWrapper.appendChild(canvas);
    return canvas;
}