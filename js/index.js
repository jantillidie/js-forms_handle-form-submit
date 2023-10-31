console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const formElements = event.target.elements;
  const firstName = formElements.firstName.value;

  const ageBadnessSum = Number(formElements.age.value) + Number(formElements.badness.value);

  console.log(data);
  console.log(`The age-badness-sum of ${firstName} is ${ageBadnessSum}`);
  event.target.reset();
  event.target.elements.firstName.focus();
})
