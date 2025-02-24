# Multi Step Form

## Instruction

In this challenge you're given a multi step form for getting data from the user. With the JSX already in place, update the component's state and functions in order to allow the user to progress through the form, updating the state as necessary.

## Tasks

1. Allow the user to transition to the next step.
2. Allow the user to return to the previous step.
3. Update the formData as the user progresses through the form.
4. When finished, submit the form and reset the component's state

# Solution

We want to persist **formdata** across different renders of the MultiStepForm. Therefore, we'll need to store it as component state using useState.

```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  address: '',
  city: '',
  zipcode: '',
});
```

Since currentStep is what allows us to dynamically show or hide different sections of our form, we'll want to store it as component state as well and update it whenever handleNextStep or handlePrevStep are called.

```javascript
const [currentStep, setCurrentStep] = React.useState(1);

...

const handleNextStep = () => {
  setCurrentStep(currentStep + 1);
};

const handlePrevStep = () => {
  setCurrentStep(currentStep - 1);
};
```

We can encapsulate all the logic for updating our formdata state into our handleChange function. We can use the name attribute on the input elements to determine which property of **formdata** to update

```javascript
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
```

Form data is an object, we need to use the spread operator to copy over all the existing properties and values before updating the one that changed.

When the user submits the form we want to reset formdata and currentStep back to their initial values.

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  alert('Thank you for your submission');
  setCurrentStep(1);
  setFormData(initialFormData);
};
```

Also we don't forget to call preventDefault when the form is submitted to prevent the page form submitting the form and reloading.
