function make_album(artist, title, tracks=0){
    if (tracks === 0){

    var obj1 = {
        artist_name : artist,
        album_title: title
    }
    return obj1}
    else {

        var obj2 = {
            artist_name : artist,
            album_title: title,
            track: tracks
        }
        return obj2
    }
    
}
console.log(make_album('hassan','boss' ));
console.log(make_album('shah','heart' ));
console.log(make_album('ali','pain' , 5));