import { createKeyboard } from './createKbd.js';

const createWindow = () => {
  const header = document.createElement('header');

  const containerHeader = document.createElement('div');
  containerHeader.className = 'container';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Microsoft Windows virtual keyboard';

  containerHeader.append(title);
  header.append(containerHeader);
  document.body.append(header);

  const main = document.createElement('main');

  const containerMain = document.createElement('div');
  containerMain.className = 'container';

  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';

  const subtitle = document.createElement('h2');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'Press Shift-left+Ctrl-left to change language';

  const keyboardFunc = createKeyboard();

  containerMain.append(textarea, subtitle, keyboardFunc);
  main.append(containerMain);
  document.body.append(main);
};

export default createWindow;

createWindow();