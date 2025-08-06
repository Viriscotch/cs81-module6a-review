The most challenging part for me was understanding how the prototype chain works and where `this` refers to the specific Playlist instance inside each method.

`this` always refers to the Playlist object on which the method is called. This allows the object to access and modify its own internal data (like `songs` and `currentSong`) using shared method definitions.

If I wrote it from scratch, I would add more robust playback controls, like "previous song", looping, or a way to remove specific songs.