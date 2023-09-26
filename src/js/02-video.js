import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENTTIME=`videoplayer-current-time`;
function getCurrentTimeKey(timeKey){
    localStorage.setItem(CURRENTTIME, timeKey.seconds);
};
player.on('timeupdate',throttle(getCurrentTimeKey, 1000));
 
const currentTimeValue = localStorage.getItem(CURRENTTIME)||0;
player.setCurrentTime(currentTimeValue);


