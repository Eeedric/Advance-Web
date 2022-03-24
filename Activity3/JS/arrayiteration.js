console.log("91 4 8 29 2")

const numbers = [91, 4, 8, 29, 2];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("arrayiteration").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}