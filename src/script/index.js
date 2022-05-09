import langKey from './language.js';
import createWindow from './createWindow.js';
import {
  serviceBtn, 
  showShift, 
  lettersEn, 
  lettersRu,
} from './createBtn.js';



// export let language = 'ru';

import {createKeyboard} from './createKbd.js';

let language = 'ru';
const keyboardWrapper = document.querySelector('.keyboard-wrapper');
const buttons = document.querySelectorAll('.button');
const capsLockBtn = document.querySelector('.button[data-code=\'CapsLock\'');
const allShift = document.querySelectorAll('.button[data-code=\'CapsLock\'')
const leftShift = document.querySelector('.button[data-code=\'ShiftLeft\'');
const rightShift = document.querySelector('.button[data-code=\'ShiftRight\'');
const textarea = document.querySelector('.textarea');
let isCapsLock = false;
let isShift = false;

/** Фокус */
const setFocus = () => {
  textarea.focus();
};

const capsLockKey = () => {
  isCapsLock === false 
    ? isCapsLock = true 
    : isCapsLock = false;
  langKey[language].forEach((item) => {
    if (isCapsLock) {
      if (!capsLockBtn.classList.contains('button-active')) capsLockBtn.classList.add('button-active');
      if (item.shift !== null) {
        buttons.forEach((btn) => {
          if (lettersRu.includes(btn.dataset.code)) btn.innerHTML = btn.innerHTML.toUpperCase();
        });
      }
    } else if (!isCapsLock) {
      capsLockBtn.classList.remove('button-active');
      if (item.shift !== null) {
        buttons.forEach((btn) => {
          if (lettersRu.includes(btn.dataset.code)) btn.innerHTML = btn.innerHTML.toLowerCase();
        });
      }
    }
  });
};

const shiftKey = () => {
  isShift === false 
    ? isShift = true 
    : isShift = false;
  buttons.forEach(btn => {
    if (!serviceBtn.includes(btn.dataset.code)) {
      const btnObj = langKey[language].find((item) => item.code === btn.dataset.code);
      if (isShift) btn.innerHTML = btnObj.shift;
      else btn.innerHTML = btnObj.symbol;
    }
  });
};

document.addEventListener('keydown', (e) => {
  if (e.shiftKey) {
    shiftKey();
  }
});

function printSymbol(key) {
  if (!serviceBtn.includes(key.dataset.code)) textarea.value += key.innerHTML;
  if (key.dataset.code === 'ArrowLeft') textarea.value += '←';
  else if (key.dataset.code === 'ArrowRight') textarea.value += '→';
  else if (key.dataset.code === 'ArrowUp') textarea.value += '↑';
  else if (key.dataset.code === 'ArrowDown') textarea.value += '↓';
  else if (key.dataset.code === 'Enter') textarea.value += '\n';
  else if (key.dataset.code === 'Backspace') textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
  else if (key.dataset.code === 'Tab') textarea.value += '\t';
  else if (key.dataset.code === 'Delete') textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
  else if (key.dataset.code === 'Space') textarea.value += '';
  else if (key.dataset.code === 'CapsLock') capsLockKey();
  else if (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight') shiftKey();
  return textarea.value;
}

/* Переключение языка */
const changeLanguage = (lang) => {
  buttons.forEach(btn => {
    const btnObj = langKey[lang].find((item) => item.code === btn.dataset.code);
    btn.innerHTML = btnObj.symbol;
    btn.key = btnObj.symbol;
    btn.classList.remove('button-active');
  });
};

document.addEventListener('keydown', e => {
  if ((e.ctrlKey && e.code === 'AltLeft') || (e.altKey && e.code === 'ControlLeft')) {
    if (language === 'en') {
      language = 'ru';
    } else {
      language = 'en';
    };
    localStorage.setItem('language', language);
    changeLanguage(language);

  }
});

function getLocalStorageLang() {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
};

/* Обработка нажатий и кликов* */
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  setFocus();
  buttons.forEach(btn => {
    if (e.code === btn.dataset.code) {
      btn.classList.add('button-active');
      printSymbol(btn);
    }
    if (btn.dataset.code === 'ShiftLeft' || btn.dataset.code === 'ShiftRight') isShift = true;
  });
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  setFocus();
  buttons.forEach(btn => {
    if (btn.dataset.code !== 'CapsLock') {
      btn.classList.remove('button-active');
    }
    if (btn.dataset.code === 'ShiftLeft' || btn.dataset.code === 'ShiftRight') isShift = false;
  });
});

keyboardWrapper.addEventListener('mousedown', e => {
  for (const key of buttons) {
    if (e.target.dataset.code === key.dataset.code) {
      if (e.target.dataset.code !== 'CapsLock') key.classList.add('button-active');
      key.classList.add('button-active');
      printSymbol(key);
    }
  }
});

keyboardWrapper.addEventListener('mouseup', e => {
  for (const key of buttons) {
    if (e.target.dataset.code === key.dataset.code) {
      if (e.target.dataset.code !== 'CapsLock') key.classList.remove('button-active');
    }
  }
});

allShift.forEach(btn => {
  btn.addEventListener('mousedown', e => {
    e.preventDefault();
    btn.classList.add('button-active')
    shiftKey();
  })
})

// capsLockBtn.addEventListener('click', () => {
//   buttons.forEach((btn) =>{
//     if (lettersRu.includes(btn.dataset.code)) {
//       if (btn.innerHTML !== btn.innerHTML.toUpperCase()) {
//         capsLockBtn.classList.add('button-active');
//         btn.innerHTML = btn.innerHTML.toUpperCase()
//       } else {
//         btn.innerHTML = btn.innerHTML.toLowerCase()
//         capsLockBtn.classList.remove('button-active')
//       }

//     }
    // if (capsLockBtn.classList.contains('button-active')) capsLockBtn.classList.remove('button-active')
    // else capsLockBtn.classList.add('button-active');
    
  // })
  // if (capsLockBtn.classList.contains('button-active')) capsLockBtn.classList.remove('button-active')
  // else capsLockBtn.classList.add('button-active');
// })

// buttons.forEach((btn) => {
//   if (lettersRu.includes(btn.dataset.code)) btn.innerHTML = btn.innerHTML.toUpperCase();
// });
// }
// } else if (!isCapsLock) {
// capsLockBtn.classList.remove('button-active');
// if (item.shift !== null) {
// buttons.forEach((btn) => {
//   if (lettersRu.includes(btn.dataset.code)) btn.innerHTML = btn.innerHTML.toLowerCase();
// });
// }





// buttons.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     setFocus();
//     buttons.forEach((elem) => {
//       if (elem.dataset.code !== 'CapsLock')
//       elem.classList.remove('button-active');
//     });
//     e.currentTarget.classList.add('button-active');
//   });
// });

// capsLockBtn.addEventListener('click', () => {
//   if (capsLockBtn.classList.contains('button-active')) capsLockBtn.classList.remove('button-active')
//   else capsLockBtn.classList.add('button-active')
// })







window.addEventListener('load', getLocalStorageLang);

