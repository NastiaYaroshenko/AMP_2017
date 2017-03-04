var n = 11254;
function func(n) {
if (n / 10 != 0)
    return 1 + func(Math.round(n / 10));
else
    return 1;
}
console.log(func(n)-1);






