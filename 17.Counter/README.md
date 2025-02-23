# Counter

## Instruction

This challenge is pretty straight forward. Increment or decrement count whenever the user clicks on the corresponding button.

## Tasks

1.Render the initial state correctly
2.Increment count when the user clicks the "+" button
3.Decrement count when the user clicks the "-" button
4.Render the correct count after multiple button clicks

# Solution

In order to persist out count variable across renders and update the UI when it changes, we need to create it using React's useState hook.

```javascript
const [count, setCount] = React.useState(0);
```

Whenever we're managing on event in React, in this case 'click' we should encapsulate the logic for that event in an event in an event handler, in our case we have two events we care about incrementing and decrementing the count.

```javascript
const handleIncrement = () => {};

const handleDecrement = () => {};
```

To update state based on the current state, we can reference the current state via closure scope inside of our event handler.

```javascript
const [count, setCount] = React.useState(0);

const handleIncrement = () => {
  setCount(count + 1);
};
```

The solution of this challenge:

```javascript
import * as React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </main>
  );
}
```
