const categoriesNumbers = document.querySelectorAll('#categories .item');
console.log(categoriesNumbers);
console.log(`Number of categories: ${categoriesNumbers.length}`);

// const categoryEl = document.querySelectorAll('.item');
// console.log(categoryEl);
// const numberCategoryEl = categoryEl.length;
// console.log('Number of categories:', numberCategoryEl);

categoriesNumbers.forEach(function (el, index) {
  const numberOfElements = el.querySelectorAll('li');
  const nameOfElements = el.querySelector('h2');
  console.log();

  console.log(`Category: ${nameOfElements.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});

// const allCategories = document.querySelector('#categories');

// const childrenList = allCategories.children;
// console.log(childrenList);
// const getListCount = list =>
//   [...list].forEach(child => {
//     const itemTitle = child.querySelector('h2').textContent;
//     const innerItemsList = child.querySelectorAll('li').length;
//     console.log(`Category: ${itemTitle}\nElements: ${innerItemsList}`);
//   });

// getListCount(childrenList);
