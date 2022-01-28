var num = parseInt(prompt("Enter your value"))
function arr(n,callback_mul,callback_sum){
    var mul = callback_mul(n);
    var add = callback_sum(n);
    return [mul , add] ;
}
function mulBy6(x){
    return x * 6;
}
function add4(x){
    return x + 4;
}
var func = arr(num,mulBy6,add4);
document.write('The sum of multiplication and addition is ',func);