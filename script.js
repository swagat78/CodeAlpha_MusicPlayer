const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const albumArt = document.getElementById('album-art');
const progressBar = document.getElementById('progress');

const playlist = [
    {
        title: "Starboy",
        artist: "The Weeknd",
        audioSrc: "The Weeknd - Starboy ft. Daft Punk (Official Video).mp3",
        albumArtSrc: "weeknd.jpg"
    },
    {
        title: "Superman",
        artist: "Eminem",
        audioSrc: "Chris Brown - Under The Influence (Lyrics).mp3",
        albumArtSrc: "eminem.jpg"
    },
    {
        title: "Under The Influence",
        artist: "Chris Brown",
        audioSrc: "Chris Brown - Under The Influence (Lyrics).mp3",
        albumArtSrc: "chris brown.jpg"
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = playlist[index];
    audioPlayer.src = song.audioSrc;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    albumArt.src = song.albumArtSrc;
}

function playSong() {
    audioPlayer.play();
    playBtn.textContent = 'Pause';
}

function pauseSong() {
    audioPlayer.pause();
    playBtn.textContent = 'Play';
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = playlist.length - 1;
    }
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    playSong();
}

playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

audioPlayer.addEventListener('ended', nextSong);

// Load the first song
loadSong(currentSongIndex);

