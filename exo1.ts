import {
  searchImages,
  log,
  getData,
  composeMozaic,
  sendToServer,
} from './cbAPI';

var imgs: any;
function exo1(req: string) {
  imgs = new Array();
  imgsData = new Array();
  searchImages('desc images', (data) => {
    imgs = data;
    imgs.forEach((img) => getImageData(img, (data) => composeMozaicData(data)));
  });
}

let imgsData: ImageData[] = new Array();
function getImageData(url: string, finalCb: (data: ImageData[]) => void) {
  getData(url, (data) => {
    imgsData.push(data);
    if (imgsData.length == imgs.length) {
      finalCb(imgsData);
    }
  });
}

let composedImgData: ImageData = null;
function composeMozaicData(images: ImageData[]) {
  composeMozaic(images, (returnedComposedImage) => {
    composedImgData = returnedComposedImage;
    sendToServer(composedImgData, (serverCallBack) => {
      console.log(serverCallBack);
    });
  });
}

const bt1 = document.querySelector('#bt1') as HTMLElement;
bt1.onclick = () => exo1('chats');
