import {
  searchImagesP,
  getDataP,
  composeMozaicP,
  sendToServerP,
} from './cbPromesse';
import { log } from './cbAPI';

function exo2(description: string) {
  searchImagesP('description')
    .then((urls) => Promise.all(urls.map(getDataP)))
    .then(composeMozaicP)
    .then(sendToServerP);
}

const bt2 = document.querySelector('#bt2') as HTMLElement;
bt2.onclick = () => exo2('chats');
