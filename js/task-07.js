const text = document.querySelector('#text');
console.log(text);
// button.style.backgroundColor = 'teal';
// button.style.fontSize = '24px';

document
  .getElementById('font-size-control')
  .addEventListener('input', function () {
    console.log(Number(this.value));

    text.style.fontSize = Number(this.value) + 'px';
  });
