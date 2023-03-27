// 绘制正多边形
export const createPolygon = (ctx, n, dx, dy, size) => {
    ctx.beginPath();
    let degree = (2 * Math.PI) / n;
    for (let i = 0; i < n; i++) {
        let x = Math.cos(i * degree);
        let y = Math.sin(i * degree);
        ctx.lineTo(x * size + dx, y * size + dy);
    }
    ctx.closePath();
};

// 绘制五角星
export const createFiveStar = (ctx) => {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 50 + 100, -Math.sin((18 + i * 72) * Math.PI / 180) * 50 + 100);
        ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 25 + 100, -Math.sin((54 + i * 72) * Math.PI / 180) * 25 + 100);
    }
    ctx.closePath();
    ctx.stroke();
};

// 绘制方格调色板
export const createCagePalette = (ctx) => {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)},${Math.floor(255 - 42.5 * j)},0)`;
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
};

// 绘制渐变调色板
export const createGradientPalette = (ctx, height) => {
    let r = 255, g = 0, b = 0;
    for (let i = 0; i < 150; i++) {
        if (i < 25) {
            g += 10;
        } else if (i > 25 && i < 50) {
            r -= 10;
        } else if (i > 50 && i < 75) {
            g -= 10;
            b += 10;
        } else if (i >= 75 && i < 100) {
            r += 10;
        } else {
            b -= 10;
        }
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(3 * i, 0, 3, height);
    }
};