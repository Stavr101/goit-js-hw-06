const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  if (event.currentTarget.value.length != 0) {
    output.textContent = event.currentTarget.value;
  } else {
    // console.log(event.currentTarget.value);
    output.textContent = 'Anonymous';
    // return;
  }
});
