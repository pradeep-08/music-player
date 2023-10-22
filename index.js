let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let trackNameElement = document.getElementById("trackNameElement");
let artistNameElement = document.getElementById("artistNameElement");
let trackImages = document.getElementById("trackImage");
let previousButton =document.getElementById("previousButton");
let nextButton = document.getElementById("nextButton");
let flow = document.querySelector(".flow");



let currentTrack = 0;
const audioSources = [
    "media/Whateverittakes.mp3" ,
    "media/Despacito(PagalWorld).mp3" , 
    "media/Hayyoda-MassTamilan.dev.mp3" , 
    "media/Let Her Go - Passenger 320(PagalWorld).mp3", 
    "media/Omana-Penne.mp3" ];

const trackImage = [
    "media/ab67616d0000b27371cc7899c60648c3184b0fa9.jpg" ,
    "media/Despacito.jpg" , 
    "media/Hayyoda.jpg" , 
    "media/lethergo.jpg", 
    "media/vtv.jpg"
];    

const trackNames = [
    "Whatever It Takes", 
    "Despacito" ,
    "Hayyoda",
    "Let Her Go" ,
    "Omana-Penne"
];
const artistNames = [
    "Song by Imagine Dragons", 
    "Song by Luis Fonsi",
    "Song by Anirudh Ravichander and Priya Mali", 
    "Song by Passenger",
    "Song by A. R. Rahman, Benny Dayal, and Kalyani Menon2"
];



function load(){
    song.src = audioSources[currentTrack];
    trackImages.src = trackImage[currentTrack];
    trackNameElement.textContent = trackNames[currentTrack];
    artistNameElement.textContent = artistNames[currentTrack];
}

previousButton.addEventListener("click", function () {
   
    currentTrack = (currentTrack - 1 + audioSources.length) % audioSources.length;
    load();
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    flow.classList.add("flow");

    
});

nextButton.addEventListener("click", function () {
    
    currentTrack = (currentTrack + 1) % audioSources.length;
    load();
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    flow.classList.add("flow");
    
});

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


if(song.play){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)

}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
}   



load();