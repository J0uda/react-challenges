# Dynamic Date

## Instructions

Using JavaScript, replace the static date with today's date (we made a helper function that returns today's date to help you out).

1. Use the getTodaysDate function to render today's date

# Solution

To include an expression in JSX, you need to wrap that expression curly braces {}

```javascript
function Welcome() {
  return <h1>Hello, {getName()}</h1>;
}
```

The Solution for this challenge

```javascript
import { getTodaysDate } from './utils';

function Today() {
  return <p>Today is {getTodaysDate()}</p>;
}

export default function App() {
  return <Today />;
}
```
