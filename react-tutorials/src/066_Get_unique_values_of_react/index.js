
// method 1

//let a = ["1" , "1" , "2" , "3" , "3" , "1"];
//let unique = a.filter((item , i , ar) => ar.indexOf(item) === i);
//console.log(unique);

// method 2

let a = new Set(["1" , "1" , "2" , "3" , "3" , "1"]);
let b = new Set(["1" , "1" , "2" , "3" , "3" , "1",11,1,1,15,5,5,666]);
console.log(a);