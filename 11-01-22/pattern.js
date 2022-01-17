
// for (i=0; i<=10; i++) {
//   for (j=1; j<=i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

var a = prompt("Enter the number of stars");
a = parseInt(a);

var result = "";
for (var j=1; j<=a; j++){
  for(var i=1; i<=j; i++){
    result = result + "*";
  }
  result = result + "<br/>";
}
document.write(result);