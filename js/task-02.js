const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientList = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  let items = [];

  const ingredItem = document.createElement('li');
  ingredItem.classList.add('item');
  ingredItem.textContent = `${ingredient}`;

  items.push(ingredItem);
  // console.log(items);
  ingredientList.append(...items);
}
