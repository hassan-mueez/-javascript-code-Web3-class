var magicians =  ["ali", "ahmad", "mueez", "shah"];
function show_magicians(names){
console.log(names)
}

function make_great(){
    for(i=0; i<magicians.length; i++){
        console.log("the great " + magicians[i])
    }
}
show_magicians(magicians)
make_great(magicians)