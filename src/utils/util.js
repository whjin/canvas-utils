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

// 绘制圆角矩形
export const createRoundedRect = (ctx, width, height, r, offsetX, offsetY) => {
    ctx.beginPath();
    ctx.moveTo(offsetX + r, offsetY);
    ctx.lineTo(offsetX + width - r, offsetY);
    ctx.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);
    ctx.lineTo(offsetX + width, offsetY + height - r);
    ctx.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r);
    ctx.lineTo(offsetX + r, offsetY + height);
    ctx.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r);
    ctx.lineTo(offsetX, offsetY + r);
    ctx.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);
    ctx.closePath();
};

// 绘制N叶草
export const createLeaf = (ctx, n, dx, dy, size, length) => {
    ctx.beginPath();
    ctx.moveTo(dx, dy + size);
    let degree = 2 * Math.PI / n;
    for (let i = 1; i < n + 1; i++) {
        // 控制点坐标
        let cx1 = Math.sin((i - 1) * degree) * length + dx;
        let cy1 = Math.cos((i - 1) * degree) * length + dy;
        let cx2 = Math.sin(i * degree) * length + dx;
        let cy2 = Math.cos(i * degree) * length + dy;

        // 结束点坐标
        let x = Math.sin(i * degree) * size + dx;
        let y = Math.cos(i * degree) * size + dy;

        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
    }
    ctx.closePath();
};

// 绘制扇形
export const createSector = (ctx, x, y, r, angle1, angle2) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, r, angle1 * Math.PI / 180, angle2 * Math.PI / 180, false);
    ctx.closePath();
};