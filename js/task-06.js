const inputAttribute = document.querySelector('input');

const inputLength = Number(inputAttribute.dataset.length);

inputAttribute.onblur = function () {
  console.log(this.value.trim().length);
  console.log(inputLength);

  if (inputLength === this.value.trim().length) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
};

// const inputAttribute = document.querySelector('input');

// const refs = {
//   type: inputAttribute.type,
//   id: inputAttribute.id,
//   length: Number(inputAttribute.dataset.length),
//   placeholder: inputAttribute.placeholder,
// };

// const textInput = document.querySelector('#validation-input');
// const output = document.querySelector('#name-output');

// // textInput.addEventListener('input', event => {
// //   refs.placeholder.textContent = event.currentTarget.value;

// //   if (refs.placeholder.length === refs.length) {
// //     document.querySelector('input').classList.add('valid');
// //   } else {
// //     document.querySelector('input').classList.add('invalid');
// //   }
// // });

// // console.log(refs.length);

// // console.log(refs.placeholder);

// // inputAttribute.addEventListener('blur', () => {
// //   if (refs.placeholder.value.length === refs.length) {
// //
// //   } else {
// //     document.querySelector('input').classList.add('invalid');
// //   }
// // });
