var alien_color = ["green", "yellow", "red"];
for (i=0; i<alien_color.length; i++){
if (alien_color[i] === "green"){
    console.log("player just earned 5 points");
}
else if (alien_color[i] === "red"){
    console.log("player just earned 15 points");
}
else if (alien_color[i] === "yellow"){
    console.log("player just earned 10 points");
}
}