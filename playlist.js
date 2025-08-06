// Playlist constructor function
// Initializes the playlist with a name, an empty song list, and no current song
function Playlist(name) {
  this.name = name; // Name of the playlist
  this.songs = [];  // Array to store song titles
  this.currentSong = null;  // Tracks the currently playing song
}

// Adds a song title to the playlist
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);   // Adds the new song to the end of the array
};

// Starts playing the first song in the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];   // Sets currentSong to the first song
    console.log("Now playing:", this.currentSong);  // Output shows what's playing
  }
};

// Skips the current song and plays the next one
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift(); // Removes the first song
    this.currentSong = this.songs[0];   // Updates current song
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");  // Edge case: only one or no song left
  }
};

// Lists the songs in the playlist
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);  // Shows the name of the playlist
  console.log("Songs:", this.songs.join(", ")); // Shows all song titles
};


let myMix = new Playlist("My Chill Mix");   // Creates new Playlist object
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
  