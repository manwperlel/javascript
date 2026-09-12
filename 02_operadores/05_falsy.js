// short-circuit

//false
//false
//0
//""
//null
//unferfined
//NaN

let name1 = "";
//let name1 = "hola";
let username = name1 || "anonimo";
console.log(username);

function fn1() {
    console.log("soy funcion 1");
    return true;
}

function fn2() {
    console.log("soy funcion 2");
    return true;
}

let x = fn1() && fn2();