const form = document.querySelector('.login-form');

// console.log(form);

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  //   console.log(event);
  //   console.log('это сабмит');

  const formElements = event.currentTarget.elements;
  //   console.log(formElements);

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formDataElements = {
    email,
    password,
  };
  console.log(formDataElements);

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    // console.log(name, value);

    if (value.length === 0) {
      alert('Все поля должны быть заполнены');
    }
    form.reset();
  });
}
//  document.this.reset();
