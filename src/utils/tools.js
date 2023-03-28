window.tools = {};

window.tools.getMouse = element => {
    const mouse = { x: 0, y: 0 };
    addEvent(element, 'mousemove', (e = window.event) => {
        let x, y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = pageY;
        } else {
            x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop || document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    });
    return mouse;
};

window.tools.getKey=()=>{
    
}