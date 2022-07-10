const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formDataElements = {
    email,
    password,
  };
  console.log(formDataElements);

  if (email.length === 0) {
    alert('Все поля должны быть заполнены');
  } else if (password.length === 0) {
    alert('Все поля должны быть заполнены');
  }
}
