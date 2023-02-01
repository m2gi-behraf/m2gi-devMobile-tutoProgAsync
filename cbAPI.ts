export function searchImages (
	description: string,
	cb: (urlList: string[]) => void
) {
	setTimeout( () => {
    const res = ["http://A", "http://B", "http://C", "http://D"];
    log("searchImages =", res);
    cb(res);
  }, 500);
}

export function getData (
	url: string,
	cb: (data: ImageData) => void
) {
	setTimeout( 
		() => {
      log("data received for", url);
      cb(new ImageData(10, 10));
    },
		500 * Math.random() 
	);
}


export function composeMozaic (
	data: ImageData[],
	cb: (data: ImageData) => void
) {
	setTimeout( () => {
    log("ComposeMozaic is done");
    cb(new ImageData(20, 20));
  }, 500 * Math.random());
}


export function sendToServer(
	image: ImageData,
	cb: (response: string) => void
) {
	setTimeout( () => {
    log("sendToServer is done!");
    cb("banco");
  }, 500 * Math.random());
}

export function log(...Largs: any[]) {
  console.log(...Largs);
  const code = document.querySelector("#logs") as HTMLElement;
  const str = Largs.map(e => typeof e === "string" ? e : JSON.stringify(e)).join(" ")
  code.textContent += `${Date.now()} = ${str}\n`;
}