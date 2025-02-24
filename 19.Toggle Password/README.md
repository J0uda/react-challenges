# Toggle Password

## Instruction

In this challenge, you're going to implement the logic for an input field that accepts a password. However, instead of a boring input field, this one is like... slightly less boring.

What makes it less boring is it gives the user the option to toggle the visibility of the password by giving them a button with some cute emojis, 🙊 or 🙈 depending on if the password is visible.

All the JSX is in place, all you need to do is properly handle the different states of the component and update handleChange and handleToggleVisibility so that the component behaves as expected.

## Tasks

1.Update the password length count when the input changes
2.Update the text style based on the password length threshold
3.Allow users to toggle the password visibility
4.Show an alert with a success message when the password length is equal to or above the threshold on form submission
5.Show an alert with an error message when the password length is below the threshold on form submission

# Solution

Because we want our UI to be dynamic based on the length of the input filed, we need to store the value of the input filed as state.we can do this by using React's useState hook.

```javascript
const [inputValue, setInputValue] = useState('');
```

And then we'll keep that state up tp date with whatever is in the input filed by updating inputValue whenever the onchange event is fired.

```javascript
const handleChange = (e) => {
  setInputValue(e.target.value);
};
```

In this example we need more than just our inputValue state. we also need to keep track of if the password filed is visible. Since we can't derive this value, we'll create it with useState so if persists across renders.

```javascript
const [isInputValueVisible, setIsInputValueVisible] = useState(false);
```

And then we'll toggle that state whenever handleToggleVisibility is invoke (which it will be whenever the user clicks on our monkey button).

```javascript
const handleToggleVisibility = () => {
  setIsInputValueVisible(!isInputValueVisible);
};
```

You may be tempted to add another piece of state to your component in order to keep track of if the user's current password length has surpassed the minimum value. But remember, only add state when you absolutely have to. In this scenario, we can derive that value with some basic math.

```javascript
const thresholdMet = inputValue.length >= minimum;
```
