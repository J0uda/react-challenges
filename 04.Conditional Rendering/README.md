# Conditional Rendering

## Instructions

Using an if statement, update the code to conditionally render the correct component based on the value of isLactoseTolerant.

## Tasks

1. If the user is lactose intolerant, render the LactoseIntolerant component
2. If the user is lactose tolerant, render the LactoseTolerant component

# Solution

JSX support 'early return' statements, which means you can use if statements to return the UI if a condition is met.

```javascript
function App() {
  const now = Date.now();
  const hour = now.getHours();

  if (hour < 12) {
    return <p>Good morning!</p>;
  }

  return <p>Good afternoon!</p>;
}
```

The Solution of the challenge:

```javascript
import { getIsLactoseTolerant } from './utils';

function LactoseIntolerant() {
  return (
    <h1>
      <span role='img' aria-label='brocolli and strawberry'>
        🥦🍓
      </span>
    </h1>
  );
}

function LactoseTolerant() {
  return (
    <h1>
      <span role='img' aria-label='milk and cheese'>
        🥛🧀
      </span>
    </h1>
  );
}

export default function App() {
  const isLactoseTolerant = getIsLactoseTolerant();

  if (isLactoseTolerant) {
    return <LactoseTolerant />;
  }

  return <LactoseIntolerant />;
}
```
