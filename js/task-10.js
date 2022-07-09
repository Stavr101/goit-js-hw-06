function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amountContainer = document.querySelector('#controls');

console.log(amountContainer);

const createBtn = amountContainer.querySelector('[data-create]');
const destroyBtn = amountContainer.querySelector('[data-destroy]');

const inputNumb = amountContainer.querySelector('input[type="number"]');

console.log(inputNumb);

const boxesMarkup = document.querySelector('#boxes');
let boxWidth = 30;
let boxHeight = 30;

function createBoxes(amount) {
  let markupArray = [];

  for (
    let i = Number(inputNumb.min);
    i <= amount;
    i += Number(inputNumb.step)
  ) {
    let boxMarkup = `<div style="width:${boxWidth}px; height:${boxHeight}px; background-color:${getRandomHexColor()}"></div>`;

    boxWidth += 10;
    boxHeight += 10;
    markupArray.push(boxMarkup);
  }
  boxesMarkup.insertAdjacentHTML('beforeend', markupArray.join(''));
}
destroyBtn.addEventListener('click', () => {
  boxesMarkup.remove();
  inputNumb.value = 0;
});
createBtn.addEventListener('click', () => createBoxes(inputNumb.value));
