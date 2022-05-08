import {langKey} from './language.js';
import {createWindow} from './createWindow.js';

// console.log((langKey[language]).find(item => item.code === 'Digit9'))
// console.log(Object.values(langKey[language]).forEach(item => console.log(item.code)))
// console.log(langKey[language][0].code)

// const buttonsKbd = [
//   ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
//   ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
//   ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
//   ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
//   ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
// ];
// const serviceBtn =  ['Backspace', 'Tab', 'CapsLock', 'ShiftLeft','ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'ShiftRight', 'Enter', 'Delete']
// const showShift = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash','IntlBackslash', 'Comma', 'Period', 'Slash', 'Semicolon', 'Quote'];
// const letters = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM']


// const createBtn = ({symbol, shift, code}) => {
//   const button = document.createElement('div');
//   button.className = 'button';
//   button.dataset.code = code;
  
//   const buttonText = document.createElement('span');
//   buttonText.className = 'button-text';
//   buttonText.innerHTML = symbol;
  
//   const subButton = document.createElement('span');
//   subButton.className = 'sub-button';
//   subButton.innerHTML = shift;

//   if (serviceBtn.includes(button.dataset.code)) button.classList.add('service');
//   if(!showShift.includes(button.dataset.code)) subButton.style.opacity = '0';
//   button.append(buttonText, subButton);

//   // subButton.classList.add('sub-button-active')
//   // buttonText.classList.add('button-deactive')
//   // subButton.style.opacity = '1';

//   return button;
// }

const buttonsArray = [];

// const createKeyboard = () => {

//   const keyboardWrapper = document.createElement('div');
//   keyboardWrapper.className = 'keyboard-wrapper';
  
//   buttonsKbd.forEach(rows => {
//     const row = document.createElement('div');
//     row.className = 'row';

//     rows.forEach(btn => {
//       const btnObj = (langKey[language]).find(item => item.code === btn)
//       // console.log('btnObj: ', btnObj);
//       const button = createBtn(btnObj);
//       buttonsArray.push(button)
//       row.append(button);
     
//     })
    
//     keyboardWrapper.append(row);
//   })

//   return keyboardWrapper;
// }

  // const createWindow = (language) => {
  //   const header = document.createElement('header');

  //   const containerHeader = document.createElement('div');
  //   containerHeader.className = 'container';

  //   const title = document.createElement('h1');
  //   title.className = 'title';
  //   title.textContent = 'Microsoft Windows virtual keyboard';

  //   containerHeader.append(title);
  //   header.append(containerHeader);
  //   document.body.append(header);

  //   const main = document.createElement('main');

  //   const containerMain = document.createElement('div');
  //   containerMain.className = 'container';

  //   const textarea = document.createElement('textarea');
  //   textarea.className = 'textarea';

  //   const subtitle = document.createElement('h2');
  //   subtitle.className = 'subtitle';
  //   subtitle.textContent = 'Press Shift+Ctrl to change language';

  //   const keyboarFunc = createKeyboard()

  //   containerMain.append(textarea, subtitle, keyboarFunc);
  //   main.append(containerMain);
  //   document.body.append(main);
  // }
  

createWindow()

/**Фокус */
const textarea = document.querySelector('.textarea');
const setFocus = () => {
  textarea.focus()
}

/*Обработка нажатий и кликов* */
  const buttons = document.querySelectorAll('.button');

// const addActiveClassBtn = e => {
//   document.querySelectorAll('.button').forEach(btn => btn.classList.remove('button-active'));
//   document.querySelector(`.keyboard-wrapper .row .button[data-code=${e.code}`).classList.add('button-active')
//   console.log(e.target)
//   if (e.target.closest('.button')) document.querySelector(`.keyboard-wrapper .row .button[data-code=${e.code}`).classList.add('button-active')
// }  

// document.addEventListener('keydown', addActiveClassBtn)
document.addEventListener('keydown', e => {
  buttons.forEach(element => element.classList.remove('button-active'))
  document.querySelector(`.keyboard-wrapper .row .button[data-code=${e.code}`).classList.add('button-active')
})

const keyboardWrapper = document.querySelector('.keyboard-wrapper')

// textarea.display.focus();

buttons.forEach(btn => {
  
  btn.addEventListener('click', e => {
    setFocus()
    buttons.forEach(elem => elem.classList.remove('button-active'));
    e.currentTarget.classList.add('button-active')
    // console.log(e.currentTarget.dataset)
    // console.log(e.currentTarget)
    const code = e.currentTarget.dataset.code
    console.log('code: ', code);
  })
})


// })
// const keyPrint = e => {
//   const pressed = buttonsArray.find(key = key.code === ecode)
//   if (!pressed) return;
// }

// const mouseClick = e => {
//   textarea.display.focus();
//   const btn = e.currentTarget
//   if (!btn) return;
//   const code = btn.dataset.key;
//   if (!code) return;
//   keyPrint({ code, type: e.type });
// }


