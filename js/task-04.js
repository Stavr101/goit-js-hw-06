const counterValue = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this.value = initialValue;
  this.step = step;

  this.refs = this.getRefs(rootSelector);
  this.bindEvens();
};

// counterValue;

counterValue.prototype.getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.value = refs.container.querySelector('#value');

  return refs;
};

counterValue.prototype.bindEvens = function () {
  this.refs.incrementBtn.addEventListener('click', () => {
    this.increment();
    this.updateValue();
  });

  this.refs.decrementBtn.addEventListener('click', () => {
    this.decrement();
    this.updateValue();
  });
};

counterValue.prototype.increment = function () {
  this.value += this.step;
};

counterValue.prototype.decrement = function () {
  this.value -= this.step;
};

counterValue.prototype.updateValue = function () {
  this.refs.value.textContent = this.value;
};
new counterValue({ rootSelector: '#counter', step: 1 });
