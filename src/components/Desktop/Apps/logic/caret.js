/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function Caret(id, color, bgColor) {
  this.input = document.getElementById(id);
  this.color = color;
  this.bgColor = bgColor;
}

const CaretJS = {
  var: {
    char_keys: [
      'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal',
      'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
      'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
      'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'],
    left_keys: ['Backspace', 'ArrowLeft'],
  },

  carets: {},

  // blink() {
  //     if(self.color === 'transparent')
  //         document.querySelector('.caretjs + span').style.color = Caret.color = '#39ab3d';
  //     else
  //         document.querySelector('.caretjs + span').style.color = Caret.color = 'transparent';
  // }

  update(e) {
    const input = e.target;
    const pos = input.selectionStart;
    const max = (input.hasAttribute('maxlength') ? input.attributes.maxlength.value : -1);
    let diff = 0;

    if (e.type === 'keydown' && !e.ctrlKey) {
      if ((CaretJS.var.char_keys.indexOf(e.code) > -1 && (max === -1 || pos < max)) || (e.code === 'ArrowRight' && input.value.length > 0 && pos < input.value.length)) {
        diff = 1;
      } else if (CaretJS.var.left_keys.indexOf(e.code) > -1 && pos > 0) {
        diff = -1;
      }
    }

    document.querySelector(`#${input.id} + span`).innerHTML = `${'&nbsp;'.repeat(pos + diff)}<span>â–ˆ</span>`;
  },

  appendSpan(caret) {
    const s = window.getComputedStyle(caret.input);
    const tmp = document.createElement('span');

    tmp.style.color = s.color;
    caret.input.style.textShadow = `0 0 0 ${s.color}`;
    caret.input.style.color = 'transparent';

    tmp.style.right = `${parseFloat(s['margin-right']) + parseFloat(s['border-right-width']) + parseFloat(s['padding-right']) + parseFloat(s.width)}px`;

    caret.input.insertAdjacentElement('afterend', tmp);
  },

  adjust() {
    // TODO
  },

  create(id) {
    const input = document.getElementById(id);
    const s = window.getComputedStyle(input);
    const { color } = s;
    const bgColor = s['background-color'];

    input.onkeydown = input.onkeyup = CaretJS.update;
    // setInterval(this.blink, 500);
    const tmp = new Caret(id, color, bgColor);
    CaretJS.carets[id] = tmp;
    CaretJS.appendSpan(tmp);
  },

  initialize() {
    window.onload = () => {
      for (const id in CaretJS.carets) {
        CaretJS.carets[id].input.value = '';
        document.querySelector(`#${CaretJS.carets[id].input.id} + span`).innerHTML = '<span>â–ˆ</span>';
      }
    };
  },
};

CaretJS.initialize();
