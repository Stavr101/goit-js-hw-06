function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
console.log(changeBtn);

const body = document.querySelector('body');
console.log(body);

const spanColor = document.querySelector('.color');

changeBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
