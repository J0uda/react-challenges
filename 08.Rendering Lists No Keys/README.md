# Rendering Lists No Keys

## Instructions

Given an array of friends, create a list item for every friend inside of our unordered list. Note: The items in our friends array don't have their own unique keys. You need to improvise.

## Tasks

1. Render an unordered list with all of the friends
2. Each list item should display the correct name
3. Each list item should be given a unique key

# Solution

The Array.map method in JavaScript has a callback that receives 3 arguments, the current element in the list, the **index**, and a reference to original **array**. if we don't have a unique key available in your data, using the **index** as the key works - assuming you're not mutating the array.

the Solution of this challenge:

```javascript
import * as React from 'react';

function List() {
  const friends = ['Ben', 'Lynn', 'Alex'];

  return (
    <ul>
      {friends.map((friend, index) => {
        return <li key={index}>{friend}</li>;
      })}
    </ul>
  );
}

export default function App() {
  return <List />;
}
```
