import Vimeo from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
console.log(iframe);

const player = new Vimeo(iframe);
console.log(player);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', function (iframe) {
  console.log(JSON.stringify(iframe));
  localStorage.setItem('videoplayer-current-time', JSON.stringify(iframe));
});

const videoplayerCurrentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(videoplayerCurrentTime);
console.log(videoplayerCurrentTime.seconds);

player
  .setCurrentTime(videoplayerCurrentTime.seconds);
 
