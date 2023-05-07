import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const timeLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(timeLocalStorage)
  .catch(error => {
    if (error.name === 'RangeError') return;
  });



