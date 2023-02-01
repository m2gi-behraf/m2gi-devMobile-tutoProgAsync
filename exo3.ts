import {
  searchImagesP,
  getDataP,
  composeMozaicP,
  sendToServerP,
} from './cbPromesse';
import { log } from './cbAPI';

async function exo3(descr: string): Promise<void> {
  let urls = await descr;
  let imgs: ImageData[] = await Promise.all(urls.map(getDataP));
  let mozaic = await composeMozaicP(imgs);
  console.log(await sendToServerP(mozaic));
}

const bt3 = document.querySelector('#bt3') as HTMLElement;
bt3.onclick = () => {
  log("avant l'appelle à exo3");
  exo3('chats');
  log("après l'appelle à exo3");
};
