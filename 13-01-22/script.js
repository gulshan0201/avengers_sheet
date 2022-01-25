
const arr = [
  [2, 4, 6, 7],
  [3, 5, 7, 2],
  [8, 9, 5, 6],
  [9, 6, 4, 3],
];
var digonalsum = 0;
for(i = 0; i < arr.length; i++) {
  for(j = 0; j < arr[i].length; j++){
     if(i == j) {
        digonalsum = digonalsum + arr[i][j];
     } 
  }
}
console.log(digonalsum);
document.write(digonalsum);

