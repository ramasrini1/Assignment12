let artistList = ["Operation Ivy", "Blink 182", "New Found Glory"];
let titleList  = ["Energy", "Dude Ranch", "Sticks and Stones"];
var jBox;

// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", init);

function init() {
    "use strict";
    createAlbums();
    var play = window.document.getElementById("play");
    // HANDLE THE CLICK EVENT FOR THE PLAY BUTTON
    play.addEventListener("click", function () {
        let selectedAlbum =  document.getElementById('album');
        var myAlbum = selectedAlbum.options[selectedAlbum.selectedIndex].value;
        var albumIndex = selectedAlbum.selectedIndex;
        jBox.albums[albumIndex].play();
        let myTitle  = jBox.albums[albumIndex].title;
        let myArtist = jBox.albums[albumIndex].artist;
        console.log(`Played Ablum artist: ${myArtist} title: ${myTitle}`);
        
    });
    //Handle click event for favorite Album button
    favAlbum.addEventListener("click", function () {
        let flist = jBox.favoriteAlbum();
        let msg   = jBox.displayFavList(flist);
        console.log(msg);
        let output = document.getElementById('favoriteAlbum');
        // SET THE TEXT on the web page
        output.innerHTML = msg;
    });
}
// Classes
class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        let favList = [];
        //Find the max number
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                //fav = this.albums[i];
            }
        }
        //Iterate through the album List and create the fav list of albums
        for(let i =0; i<this.albums.length; i++){
            if (this.albums[i].played === max) {
                favList.push(this.albums[i]);
            }
        }
        return favList;
    }
    
    displayFavList = function(favList) {
        let str, str1, artists, titles, count;
        let length = favList.length;
        let buf;
        str = "";
        
        for (let i= 0; i<length; i++){
            titles = favList[i].title
            artists = favList[i].artist;
            count = favList[i].played;
            buf = artists + ": " + titles ;
            str = str + buf + "<br>"
        }   
        //console.log("str is " + str);
        //str1 = `Favorite List:  ${str}  <br>This album list has been played ${count} times.`;
        str1 = `Favorite List:<br> ${str} <br> This album list has been played ${count} times.`;
        return str1;
        
    }
    
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}.<br>This album has been played ${this.played} times.`;
        
    }
    
}
//Wrapper Function 
function createAlbums(){
    jBox = new Jukebox();
    for (let i=0; i<artistList.length; i++){
        const album = new Album(artistList[i], titleList[i]);
        jBox.addAlbum(album);
    }   
}





