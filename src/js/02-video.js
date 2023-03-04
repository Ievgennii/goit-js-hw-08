import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);

const player = new Vimeo(iframe);
// console.log(player);
const addlocalStorage = function (iframe) {
  // console.log(JSON.stringify(iframe));
  localStorage.setItem('videoplayer-current-time', JSON.stringify(iframe));
};

player.on('timeupdate', throttle(addlocalStorage, 1000));

const videoplayerCurrentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
// console.log(videoplayerCurrentTime);
// console.log(videoplayerCurrentTime.seconds);

if (videoplayerCurrentTime) {
  player.setCurrentTime(videoplayerCurrentTime.seconds);
}
