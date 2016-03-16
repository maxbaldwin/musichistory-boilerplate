"use strict"
let playlist = document.getElementById("music")
let songs = [];

songs[songs.length] = "Get By > by Clique";
songs[songs.length] = "Saddle Up, San Antonio > by You Blew It!";
songs[songs.length] = "If and When I Die > by TWIABP";
songs[songs.length] = "Vertigo Chamber > Hightide Hotel";


//For loop to iterate through songs
for (let i = 0; i < songs.length; i++) {
//adding replace methods to remove "*","@","(","!" and replace ">" with "-"
  let cleanStrings = songs[i].replace (/[*@(!]/g,"").replace(">","-")
}