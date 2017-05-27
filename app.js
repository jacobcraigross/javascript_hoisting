// Before any code runs, the engine sees that we do in fact have a variable.
// The difference between undefined and NOT defined.
var a;
console.log(a);

if (a === undefined){
    console.log("a is undefined");
} else {
    console.log("a is defined");
}
