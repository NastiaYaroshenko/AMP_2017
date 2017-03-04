var str1 = "acfhk", str2 = "dginop"; 
var arr1 = str1.split('') ; 
var arr2 = str2.split('') ;
var arr = arr1.concat(arr2);
function comparison(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
arr.sort(comparison);
var str = arr.join(', ');
console.log(str); 

