import {langKey} from './language.js';

// document.addEventListener('keydown', e => {
//   keyboard.push(e.code);
//   console.log('keyboard: ', keyboard);
// })

// const init = () {
//   let out = '';
//   keyboard.forEach(item => {
//     out +=''
//   })
// }

// document.addEventListener('keydown', e => {

// })

// class Keyboard {
//   constructor() {
//     this.buttons = [
//       ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
//       ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
//       ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
//       ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
//       ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
//     ];
//   }
  
//   createKeyboard() {
//     const header = document.createElement('header');

//     const containerHeader = document.createElement('div');
//     containerHeader.className = 'container';

//     const title = document.createElement('h1');
//     title.className = 'title';

//     containerHeader.append(this.title);
//     header.append(this.containerHeader);
//     document.body.append(header);

//     const main = document.createElement('main');

//     const containerMain = document.createElement('div');
//     containerMain.className = 'container';

//     const textarea = document.createElement('textarea');
//     textarea.className = 'textarea';

//     const subtitle = document.createElement('h2');
//     subtitle.className = 'subtitle';

    
//     const keyboardInner = this.createButtons()

//     containerMain.append(this.textarea, this.subtitle, this.keyboardInner);
//     main.append(this.containerMain);
//     document.body.append(main);
//   }

//   createButtons(language) {
//     this.keys = [];

//     const keyboardWrapper = document.createElement('div');
//     keyboardWrapper.className = 'keyboard-wrapper';

//     this.buttons.forEach(rows => {
//       const row = document.createElement('div');
//       row.className = 'row';
//       rows.forEach(elem => {
//         const button = document.createElement('div');
//         button.className = 'button';
//         button.textContent = elem;
//         const setData () => {
//           button.dataset = 
//           Object.keys(langKey[language])
//           .find(item => item)
//         }
//       })
//     })
//   }
// }

let language = 'ru';
// console.log((langKey[language]).find(item => item.code === 'Digit2'))
// console.log(Object.values(langKey[language]).forEach(item => console.log(item.code)))
console.log(langKey[language][0].code)

const buttons = [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ];


const createBtn = () => {
      // const button = document.createElement('div');
      // button.className = 'button';
      // button.dataset.code = elem;
      // const subButton = document.createElement('span');
      // subButton.className = 'sub-button';
}


const createKeyboard = (language) => {

  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = 'keyboard-wrapper';
  const buttonsArray = [];
  buttons.forEach(rows => {
    const row = document.createElement('div');
    row.className = 'row';

    rows.forEach(btn => {
      const btnSymbol = langKey[language].find(item => item.code === btn)
      console.log('btnSymbol: ', btnSymbol);
      // const button = createBtn(btnSymbol);

      // row.append(button);
    })

    keyboardWrapper.append(row);
  })

  return keyboardWrapper;
}


  const createWindow = (language) => {
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
    subtitle.textContent = 'Press Shift+Ctrl to change language';

    const keyboarFunc = createKeyboard(language)

    containerMain.append(textarea, subtitle, keyboarFunc);
    main.append(containerMain);
    document.body.append(main);
  }
  




  createWindow()
