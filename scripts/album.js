var albumPicasso = {
    
    title:'The Colors',
    artist:'Pablo Picasso',
    label:'Cubism',
    year:'1881',
    albumArtUrl:'assets/images/album_covers/01.png',
    songs:[
        {title:'Blue', duration:'4:26'},
        {title:'Green', duration:'3:14'},
        {title:'Red', duration: '5:01'},
        {title:'Pink', duration: '3:21'},
        {title:'Magenta', duration: '2:15'}
    ]
};

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumNirvana = {
     title: 'Nevermind',
     artist: 'Nirvana',
     label: 'DGC Records',
     year: '1991',
     albumArtUrl: 'assets/images/album_covers/nevermind.png',
     songs: [
         { title: 'Smeels like teen spirit', duration: '5:01' },
         { title: 'In bloom', duration: '4:15' },
         { title: 'Come as you are', duration: '3:39'},
         { title: 'Breed', duration: '3:04' },
         { title: 'Lithium', duration: '4:17'}
        /* { title: 'Polly', duration: '2:57' },
         { title: 'Territorial pissings', duration: '2:23' },
         { title: 'Drain you', duration: '3:44'},
         { title: 'Lounge act', duration: '2:37' },
         { title: 'Stay away', duration: '3:32'}
         { title: 'On a plain', duration: '3:16' },
         { title: 'Something in the way, Endless, Nameless', duration: '20.35'}*/
         
         //Need to figure out why the code does not work if you add more than 5 songs
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
    var template  =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
    
    return template;
};

var setCurrentAlbum = function(album) {
    
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration); 
    }
};

window.onload = function () {
  setCurrentAlbum(albumMarconi);  
};

document.getElementsByClassName('album-cover-art')[0].addEventListener("click", clickCover);

function clickCover() {  
    
    var artist = document.getElementsByClassName('album-view-artist')[0].firstChild.nodeValue;
    
    if (artist == "Nirvana") {
    setCurrentAlbum(albumMarconi);  
    } else if (artist == "Guglielmo Marconi"){
    setCurrentAlbum(albumPicasso);
    } else {
    setCurrentAlbum(albumNirvana);
    }
}