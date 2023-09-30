import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function setCurrentTime() {
  let currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
document.addEventListener('DOMContentLoaded', setCurrentTime());
