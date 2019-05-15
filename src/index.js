const getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = `${hours}:${min}:${sec}`;

    return time;
}

const renderLogger = (target) => {
    let render = target.prototype.render;

    target.prototype.render = function() {
        console.log(`%c🍀 %crender: %c${this.constructor.name} %c@ ${getTime()}`, `font-size: 20px`, `color: gray; font-size: 12px;`, `color: inherit; font-size: 12px;`, `color: gray; font-size: 12px;`);
        return render.call(this);
    }
}

export { renderLogger };

export default renderLogger;
