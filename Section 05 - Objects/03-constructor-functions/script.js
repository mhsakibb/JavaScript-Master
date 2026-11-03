
// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const myCircle2 = new Circle(1);