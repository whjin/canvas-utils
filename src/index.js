import { createPolygon, createFiveStar } from "./utils/util";

window.onload = function () {
    const canvasWrapper = document.querySelector(".canvas-wrapper");
    drawPolygon(canvasWrapper);
    drawFiveStar(canvasWrapper);
};

function drawPolygon (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas1');
    const ctx = canvas.getContext('2d');
    createPolygon(ctx, 3, 100, 75, 50);
    ctx.fillStyle = "HotPink";
    ctx.fill();
}

function drawFiveStar (canvasWrapper) {
    let canvas = createEle(canvasWrapper);
    canvas.setAttribute('id', 'canvas2');
    const ctx = canvas.getContext('2d');
    createFiveStar(ctx);
}

function createEle (canvasWrapper) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '200');
    canvas.setAttribute('height', '150');
    canvas.style.border = '1px dashed gray';
    canvasWrapper.appendChild(canvas);
    return canvas;
}