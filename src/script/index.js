import {langKey} from './language.js';
import {createWindow} from './createWindow.js';
import {serviceBtn, showShift, lettersEn, lettersRu} from './createBtn.js';
import {language} from './createKbd.js';


const capsLockBtn = document.querySelector('.button[data-code=\'CapsLock\''); 
const leftShift = document.querySelector('.button[data-code=\'ShiftLeft\'');
const rightShift = document.querySelector('.button[data-code=\'ShiftRight\'');
let isShift = false;
/**Фокус */
const textarea = document.querySelector('.textarea');
export const setFocus = () => {
  textarea.focus()
}

/*Обработка нажатий и кликов* */  
const buttons = document.querySelectorAll('.button');

document.addEventListener('keyup', e => {
  e.preventDefault()
  // setFocus()
  buttons.forEach(element => {
    if (element.dataset.code !== 'CapsLock') {
      element.classList.remove('button-active')
    }
    if (element.dataset.code === 'ShiftLeft' || element.dataset.code === 'ShiftRight') isShift = false;
  })
})
// buttons.forEach(btn => {
//   btn.addEventListener('mouseout', e => {
//     setFocus()
//     buttons.forEach(elem => elem.classList.remove('button-active'));
//   })
// });

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    // setFocus()
    buttons.forEach(elem => {
      if(elem.dataset.code !== 'CapsLock') elem.classList.remove('button-active');
    })
    e.currentTarget.classList.add('button-active')
    console.log(e.currentTarget.dataset)
    // console.log(e.currentTarget)
    // const code = e.currentTarget.dataset.code
    // console.log('code: ', code);

  })
});

document.addEventListener('keydown', e => {
  e.preventDefault()
  // console.log(e)
  // setFocus()
  buttons.forEach(elem => {
    if(elem.dataset.code !== 'CapsLock') elem.classList.remove('button-active');
  })
  if (e.code !== 'CapsLock') {
    document.querySelector(`.keyboard-wrapper .row .button[data-code=${e.code}`).classList.add('button-active')
  }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') isShift = true
    
  printSimbol(e);
 

});
let capsLock = false;
let xy = '';
let isCapsLock = false;



//'CapsLock', 'ShiftLeft','ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'ShiftRight', 'Enter', 'Delete'
function printSimbol(e) {
  // let posCursor = textarea.selectionStart;
  // const firstPart = textarea.value.slice(0, posCursor);
  // const secondPart = textarea.value.slice(posCursor);

  if (!serviceBtn.includes(e.code)) textarea.innerHTML+=e.key;
  if (e.code === 'Backspace') funcDel()
  if (e.code === 'Tab') textarea.innerHTML+='\t';
  if (e.code === 'CapsLock') {
    funcCL()
    changeRegister()
    if(!capsLockBtn.classList.contains('button-active')) capsLockBtn.classList.add('button-active')
    else capsLockBtn.classList.remove('button-active')
  }
    changeRegister()
  }
    //   capsLockBtn.classList.add('button-active')
    //   capsLock = true;
    // } else if(capsLockBtn.classList.contains('button-active')) {
    //   capsLockBtn.classList.remove('button-active')
    


function changeRegister() {
  // console.log(isCapsLock)
  langKey[language].forEach(item => {
    const key = item;
    if (isCapsLock) {
      if (key.shift !== null) {
        buttons.forEach(btn => {
          if (lettersEn.includes(btn.dataset.code)) btn.style.textTransform = 'uppercase';
        })
      } 
    } else if (!isCapsLock) {
      if (key.shift !== null) {
        buttons.forEach(btn => {
          if (lettersRu.includes(btn.dataset.code)) btn.style.textTransform = 'lowercase';
        })
      } 
    }
    if (isShift) {
      if (key.shift !== null) {
        buttons.forEach(btn => {
          if (lettersEn.includes(btn.dataset.code)) btn.style.textTransform = 'uppercase';
        })
      } else if (!isShift) {
        if (key.shift !== null) {
          buttons.forEach(btn => {
            if (lettersRu.includes(btn.dataset.code)) btn.style.textTransform = 'lowercase';
          })
        } 
      }
    }

  })

}





//BackSpace
function funcDel() {
	let valu = textarea.innerHTML;
	let x = textarea.innerHTML.length;
	let y = 1;
	let z = x-y;
	textarea.innerHTML=valu.slice(0,z);
}

//CapsLock
function funcCL() {
  isCapsLock === false ? isCapsLock = true : isCapsLock = false
}

//Shift
function funcShift() {
  if (leftShift.classList.contains('button-active') || rightShift.classList.contains('button-active')) {
    isShift = true
  } else isShift = false
}

console.log('leftShift: ', leftShift);
//Space
function funcSpace() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+' ';
}