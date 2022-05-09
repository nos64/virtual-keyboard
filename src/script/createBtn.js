export const serviceBtn = ['Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'ShiftRight', 'Enter', 'Delete'];
export const showShift = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'IntlBackslash', 'Comma', 'Period', 'Slash', 'Semicolon', 'Quote'];
export const lettersEn = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'];
export const lettersRu = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period'];

export const createBtn = ({ symbol, shift, code }) => {
  const button = document.createElement('div');
  button.className = 'button';
  button.dataset.code = code;
  button.innerHTML = symbol;

  // const buttonText = document.createElement('span');
  // buttonText.className = 'button-text';
  // buttonText.innerHTML = symbol;

  // const subButton = document.createElement('span');
  // subButton.className = 'sub-button';
  // subButton.innerHTML = shift;

  if (serviceBtn.includes(button.dataset.code)) button.classList.add('service');
  // if (!showShift.includes(button.dataset.code)) subButton.style.opacity = '1';
  // button.append(buttonText);

  // subButton.classList.add('sub-button-active')
  // buttonText.classList.add('button-deactive')
  // subButton.style.opacity = '1';

  return button;
};
