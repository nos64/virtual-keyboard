import { createBtn } from './createBtn.js';
import langKey from './language.js';

const buttonsKbd = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];
export const allButtons = [];
export const createKeyboard = () => {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = 'keyboard-wrapper';

  buttonsKbd.forEach((rows) => {
    const row = document.createElement('div');
    row.className = 'row';

    rows.forEach((btn) => {
      if (localStorage.getItem('language') === 'ru') {
        const btnObj = langKey['ru'].find((item) => item.code === btn);
        const button = createBtn(btnObj);
        row.append(button);
        allButtons.push(button);
      } else if (localStorage.getItem('language') === 'en') {
        const btnObj = langKey['en'].find((item) => item.code === btn);
        const button = createBtn(btnObj);
        row.append(button);
        allButtons.push(button);
      } else {
        const btnObj = langKey['en'].find((item) => item.code === btn);
        const button = createBtn(btnObj);
        row.append(button);
        allButtons.push(button);
      }
    });
    keyboardWrapper.append(row);
  });
  return keyboardWrapper;
};
