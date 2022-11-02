var magicians =  ["ali", "ahmad", "mueez", "shah"];
var the_great=[];

function show_magicians(names){
console.log(names)
}

function make_great(a,b){
    for(i=0; i<a.length; i++){

        b[i] = "the great " + a[i]
    }
    console.log(b)
}
show_magicians(magicians)
make_great(magicians, the_great)