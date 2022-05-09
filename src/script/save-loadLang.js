import { langKey } from './language.js';

const setLocalStorageLang = () => {
  localStorage.setItem('language', language);
};

const getLocalStorageLang = () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
};

window.addEventListener('beforeunload', setLocalStorageLang);
window.addEventListener('load', getLocalStorageLang);
