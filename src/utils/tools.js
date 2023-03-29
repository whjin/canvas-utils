
export class Arrow {
    constructor (x = 0, y = 0, color = '#ff0099', angle = 0) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = angle;
    };

    stroke (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(-20, -10);
        ctx.lineTo(0, -10);
        ctx.lineTo(0, -20);
        ctx.lineTo(20, 0);
        ctx.lineTo(0, 20);
        ctx.lineTo(0, 10);
        ctx.lineTo(-20, 10);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }

    fill (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(-20, -10);
        ctx.lineTo(0, -10);
        ctx.lineTo(0, -20);
        ctx.lineTo(20, 0);
        ctx.lineTo(0, 20);
        ctx.lineTo(0, 10);
        ctx.lineTo(-20, 10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}
