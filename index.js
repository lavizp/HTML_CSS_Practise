class CretaeCircle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('circle');
        };
    }
}

const circle = new CretaeCircle(2);
circle.draw();