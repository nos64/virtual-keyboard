import { langKey } from "./language.js";

let language = 'en';

const setLocalStorageLang = () => {
  localStorage.setItem('language', language)
};

const getLocalStorageLang = () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
};

window.addEventListener('beforeunload', setLocalStorageLang);
window.addEventListener('load', getLocalStorageLang);