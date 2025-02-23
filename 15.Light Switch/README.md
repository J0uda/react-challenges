# Light Switch

## Instruction

In order to persist a value across renders and update the UI when that value changes, we need to use React's useState hook. In this challenge, you'll need to create a button that toggles the mode state between light and dark.

## Tasks

1. The app renders without crashing
2. mode defaults to dark
3. mode toggles between dark and light when the button is clicked

# Solution

To add state to a component, we can use React's useState hook.

```javascript
const [mode, setMode] = useState('dark');
```

Whenever we're handling an event in React, in this case a click event, we'll want to encapsulate the logic for handling that event into an event handler. in our example, we'll create two - one for toggling the mode to light and one for toggling the mode to dark.

```javascript
const handleDarkMode = () => {};

const handleLightMode = () => {};
```

When we invoke **useState**, what we get back is an array with the first element being the piece of state and the second element being a way to update that state.

```javascript
const [mode, setMode] = useState('dark');
```

Whatever we pass to that second element will be set as the new value for that piece of state. So we can update our event handler's like that.

```javascript
const handleDarkMode = () => {
  setMode('dark');
};

const handleLightMode = () => {
  setMode('light');
};
```

The solution of this challenge:

```javascript
import * as React from 'react';

export default function App() {
  const [mode, setMode] = React.useState('dark');

  const handleDarkMode = () => {
    setMode('dark');
  };

  const handleLightMode = () => {
    setMode('light');
  };

  return (
    <main className={mode}>
      {mode === 'light' ? (
        <button onClick={handleDarkMode}>Activate Dark Mode</button>
      ) : (
        <button onClick={handleLightMode}>Activate Light Mode</button>
      )}
    </main>
  );
}
```
