
// var b = 13;
// console.log("First: " + b);


// b = 30;


// console.log("Second : " + b);

// function test() {
//     b = 26;
//     console.log("inside function : " + b);
// }

// console.log("Third : " + b);

// test();
// b = 45;


// console.log("last wala: " + b);


function test() {
    if (true) {
        let a = 10;
        var b = 20;
        const c = 30;
    }
    console.log(a); // ❌ Error (block-scoped)
    console.log(b); // ✅ Works (function-scoped)
}
test();