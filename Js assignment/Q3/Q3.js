var name = "Hassan mueez";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
//for titile case
var x = 'hassan mueez is great';
var a = x.split(" ")
for (var i = 0; i < a.length; i++) {
  let  b = a[i]
    a[i] = b.charAt(0).toUpperCase() + a[i].slice(1)
    
}
title_case = a.join(" ")
console.log(title_case)