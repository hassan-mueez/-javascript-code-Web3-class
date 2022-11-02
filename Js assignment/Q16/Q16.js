var guest = ["abu", "taya", "chachu"];
for(i=0; i<guest.length; i++){
    console.log("assalamoalikum " + guest[i] + " you are invited in dawat");
}
console.log("taya is not avaiable");
guest[1] = "ami";
for(i=0; i<guest.length; i++){
console.log("assalamoalikum " + guest[i] + " you are invited in dawat");
}
console.log("there are more space for guest");
guest.push("uncle");
guest.unshift("nana");
guest.splice(2,0,"sotun");
for(i=0; i<guest.length; i++){
    console.log("assalamoalikum " + guest[i] + " you are invited in dawat");
    }