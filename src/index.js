import { createPolygon, createFiveStar, createCagePalette, createGradientPalette, createRoundedRect, createLeaf, createSector } from "./utils/util";

window.onload = function () {
    const canvasWrapper = document.querySelector(".canvas-wrapper");
    drawPolygon(canvasWrapper);
    drawFiveStar(canvasWrapper);
    drawCagePalette(canvasWrapper);
    drawGradientPalette(canvasWrapper);
    drawRound(canvasWrapper);
    drawRoundedRect(canvasWrapper);
    drawLeaf(canvasWrapper);
    drawSector(canvasWrapper);
};

function createEle (canvasWrapper) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '200');
    canvas.setAttribute('height', '150');
    canvas.style.border = '1px dashed gray';
    canvasWrapper.appendChild(canvas);
    return canvas;
}

// 绘制正多边形
function drawPolygon (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas1');
    const ctx = canvas.getContext('2d');
    createPolygon(ctx, 3, 100, 75, 50);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

// 绘制五角星
function drawFiveStar (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas2');
    const ctx = canvas.getContext('2d');
    createFiveStar(ctx);
}

// 绘制方格调色板
function drawCagePalette (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas3');
    const ctx = canvas.getContext('2d');
    createCagePalette(ctx);
}

// 绘制渐变调色板
function drawGradientPalette (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas4');
    const ctx = canvas.getContext('2d');
    createGradientPalette(ctx, canvas.height);
}

// 绘制圆形
function drawRound (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas5');
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
    canvas.setAttribute('id', 'canvas5');
    const ctx = canvas.getContext('2d');
    createRoundedRect(ctx, 100, 100, 20, 20, 20);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

// 绘制N叶草
function drawLeaf (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas6');
    const ctx = canvas.getContext('2d');
    createLeaf(ctx, 4, canvas.width / 2, canvas.height / 2, 20, 80);
    ctx.fillStyle = "#00ff99";
    ctx.fill();
}

// 绘制扇形
function drawSector (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas7');
    const ctx = canvas.getContext('2d');
    createSector(ctx, canvas.width / 2, canvas.height / 2, 50, 30, 120);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}