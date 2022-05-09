import langKey from './language.js';
import createWindow from './createWindow.js';
import { serviceBtn, lettersRu } from './createBtn.js';

createWindow();
let language = 'ru';
const keyboardWrapper = document.querySelector('.keyboard-wrapper');
const buttons = document.querySelectorAll('.button');
const capsLockBtn = document.querySelector('.button[data-code=\'CapsLock\'');
const rightShift = document.querySelector('.button[data-code=\'ShiftRight\'');
const leftShift = document.querySelector('.button[data-code=\'ShiftLeft\'');
const textarea = document.querySelector('.textarea');
let isCapsLock = false;

const capsLockKey = () => {
  const caps = isCapsLock === false ? isCapsLock = true : isCapsLock = false;
  langKey[language].forEach((item) => {
    if (caps) {
      if (!capsLockBtn.classList.contains('button-active')) capsLockBtn.classList.add('button-active');
      if (item.shift !== null) {
        buttons.forEach((btn) => {
          const button = btn;
          if (lettersRu.includes(btn.dataset.code)) button.innerHTML = btn.innerHTML.toUpperCase();
        });
      }
    } else {
      capsLockBtn.classList.remove('button-active');
      if (item.shift !== null) {
        buttons.forEach((btn) => {
          const button = btn;
          if (lettersRu.includes(btn.dataset.code)) button.innerHTML = btn.innerHTML.toLowerCase();
        });
      }
    }
  });
};

function printSymbol(key) {
  if (!serviceBtn.includes(key.dataset.code)) textarea.value += key.innerHTML;
  if (key.dataset.code === 'ArrowLeft') textarea.value += '←';
  else if (key.dataset.code === 'ArrowRight') textarea.value += '→';
  else if (key.dataset.code === 'ArrowUp') textarea.value += '↑';
  else if (key.dataset.code === 'ArrowDown') textarea.value += '↓';
  else if (key.dataset.code === 'Enter') textarea.value += '\n';
  else if (key.dataset.code === 'Backspace') {
    if (textarea.selectionStart === 0) return;
    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
  } else if (key.dataset.code === 'Tab') textarea.value += '\t';
  else if (key.dataset.code === 'Delete') {
    if (textarea.selectionStart === document.querySelector('textarea').value.length) return;
    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
  } else if (key.dataset.code === 'Space') textarea.value += '';
  else if (key.dataset.code === 'CapsLock') capsLockKey();
}

const keydownShift = () => {
  buttons.forEach((btn) => {
    if (!serviceBtn.includes(btn.dataset.code)) {
      const button = btn;
      const btnObj = langKey[language].find((item) => item.code === btn.dataset.code);
      button.innerHTML = btnObj.shift;
    }
  });
};

const keyupShift = () => {
  buttons.forEach((btn) => {
    if (!serviceBtn.includes(btn.dataset.code)) {
      const button = btn;
      const btnObj = langKey[language].find((item) => item.code === btn.dataset.code);
      if (button.innerHTML === btnObj.shift) button.innerHTML = btnObj.symbol;
    }
  });
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    keydownShift();
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    keyupShift();
  }
});

/* Переключение языка */
const changeLanguage = (lang) => {
  buttons.forEach((btn) => {
    const button = btn;
    const btnObj = langKey[lang].find((item) => item.code === btn.dataset.code);
    button.innerHTML = btnObj.symbol;
    button.key = btnObj.symbol;
    button.classList.remove('button-active');
  });
};

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey && e.code === 'AltLeft') || (e.altKey && e.code === 'ControlLeft')) {
    if (language === 'en') {
      language = 'ru';
    } else {
      language = 'en';
    }
    localStorage.setItem('language', language);
    changeLanguage(language);
  }
});

function getLocalStorageLang() {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
}

/* Обработка нажатий и кликов */
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  buttons.forEach((btn) => {
    if (e.code === btn.dataset.code) {
      btn.classList.add('button-active');
      printSymbol(btn);
    }
  });
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  buttons.forEach((btn) => {
    if (btn.dataset.code !== 'CapsLock') {
      btn.classList.remove('button-active');
    }
  });
});

keyboardWrapper.addEventListener('mousedown', (e) => {
  buttons.forEach((btn) => {
    if (e.target.dataset.code === btn.dataset.code) {
      if (e.target.dataset.code !== 'CapsLock') btn.classList.add('button-active');
      btn.classList.add('button-active');
      printSymbol(btn);
    }
  });
});

keyboardWrapper.addEventListener('mouseup', (e) => {
  buttons.forEach((btn) => {
    if (e.target.dataset.code === btn.dataset.code) {
      if (e.target.dataset.code !== 'CapsLock') btn.classList.remove('button-active');
    }
  });
});

const mouseDownShift = (e) => {
  e.preventDefault();
  buttons.forEach((btn) => {
    if (!serviceBtn.includes(btn.dataset.code)) {
      const button = btn;
      const btnObj = langKey[language].find((item) => item.code === btn.dataset.code);
      button.innerHTML = btnObj.shift;
    }
  });
};

const mouseUpShift = (e) => {
  e.preventDefault();
  buttons.forEach((btn) => {
    if (!serviceBtn.includes(btn.dataset.code)) {
      const button = btn;
      const btnObj = langKey[language].find((item) => item.code === btn.dataset.code);
      button.innerHTML = btnObj.symbol;
    }
  });
};

leftShift.addEventListener('mouseup', mouseUpShift);
leftShift.addEventListener('mousedown', mouseDownShift);
rightShift.addEventListener('mouseup', mouseUpShift);
rightShift.addEventListener('mousedown', mouseDownShift);

window.addEventListener('load', getLocalStorageLang);
