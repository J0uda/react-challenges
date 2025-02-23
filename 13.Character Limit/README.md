# Character limit

## Instruction

Whenever we're dealing with events in React, we can extract the logic for those events into their own event handlers.

The goal with this challenge is to make it so when the user types more than 10 characters into the input field, they'll get an alert that says "Character limit exceeded".

## Tasks

1. Don't show an alert if the input is under the character limit
2. Show an alert if the input exceeds the character limit

# Solution

Because we're dealing with events, you'll first want to create an event handler that we can pass as an onChange prop to our input filed.

```javascript
  function handleChange() {
    ...

    <input onChange={handleChange} />
  }
```

When we pass a function as an **onChange** prop, when the event occurs, React will invoke that function passing it information about the event as the first argument. we can use that first argument to get the text in the input filed using event.target.value

```javascript
function handleChange(event) {
  const text = event.target.value;
}
```

To check how many characters are in the input filed, we can use event.target.value.length

```javascript
if (event.target.value.length > 10) {
}
```

The solution of the Challenge:

```javascript
export default function App() {
  const handleChange = (event) => {
    if (event.target.value.length > 10) {
      alert('Character limit exceeded');
    }
  };

  return (
    <section>
      <h1>Character Limit</h1>
      <input onChange={handleChange} placeholder='Enter some text' />
    </section>
  );
}
```
