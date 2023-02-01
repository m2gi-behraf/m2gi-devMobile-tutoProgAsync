import { log } from './cbAPI';

const html = `
    <div class="fond"></div>
    <section>
      <input />
      <button class="OK">OK</button>
      <button class="CANCEL">CANCEL</button>
    </section>
`;

function openDialog(): Promise<string> {
  const root = document.createElement('div');
  root.classList.add('dialog');
  root.innerHTML = html;
  document.body.appendChild(root);

  const input = root.querySelector('input');
  const ok = root.querySelector('button.OK') as HTMLButtonElement;
  const cancel = root.querySelector('button.CANCEL') as HTMLButtonElement;

  return new Promise<string | undefined>((resolve, reject) => {
    ok.onclick = () => {
      resolve(input.value);
      root.remove();
    };

    cancel.onclick = () => {
      reject('stop...');
      root.remove();
    };
  });
}

const bt4 = document.querySelector('#bt4') as HTMLButtonElement;
bt4.onclick = async () => {
  while (true) {
    const txt = await openDialog();
    log(txt);
    await waitMs(1000);
  }
};

async function waitMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
