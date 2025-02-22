# Ternary Rendering

## Instructions

Given the solution code to the previous challenge, refactor this code to use a ternary operator to conditionally render the UI rather than an if statement.

## Tasks

1. If the user is lactose intolerant, render the LactoseIntolerant component
2. If the user is lactose tolerant, render the LactoseTolerant component

# Solution

When conditionally rendering in JSX, we can use Javascript's ternary operator.

```javascript
function App() {
  const now = Date.now();
  const hour = now.getHours();

  return hour < 12 ? <p>Good Morning!</p> : <p>Good Morning:</p>;
}
```

The Solution of this Challenge:

```javascript
import { getIsLactoseTolerant } from './utils';

function LactoseIntolerant() {
  return (
    <h1>
      <span role='img' aria-label='broccoli and strawberry'>
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

  return isLactoseTolerant ? LactoseIntolerant : LactoseTolerant;
}
```
