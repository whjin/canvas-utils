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