let anonima =(function (a, b, c) {
  let resultado = c === "+" ? (a + b) : c === "-" ? (a - b) : c=='*'?(a*b):c=='/'?(b==0)?"error div":(a/b): "error";
  return resultado;
})

console.log(anonima(5, 100, "+"));
console.log(anonima(5, 100, "-"));
console.log(anonima(5, 100, "*"));
// anonima(5, 100, "-");
// anonima(5, 100, "*");
// anonima(5, 100, "/");
// anonima(5, 100, "#");

// (5, 7, "-");



// (5, 7, "-");

// let Suma =function(a, b){
//     let sumar = a + b
//     return sumar
// }

// console.log("La suma es " + Suma(5,17));

// console.log(Suma());

// console.log((25, 30, '+'));


// (5, 7, "+");

// console.log(oto);