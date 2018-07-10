// function sum (a, b) {
//     return a + b;
// }

// const sum = (a, b) =>  (a + b);

// console.log(sum(1, 2));
function Person() {
    // constructor của Person() định nghĩa `this` như một biến.
    var that = this;
    this.age = 0;

    [1, 2, 3].forEach(() => {
        this.age++;
    });
    console.log(this.age);
}

var p = new Person();
