# Rendering Lists

## Instructions

Given an array of friends, update our ul to include a li for every friend. The list item should display all the friend's names.

## Tasks

1. Render an unordered list with all of the friends.
2. Each list item should display the correct name.
3. Each list item should be given a unique key.

# Solution

The Array.map method in Javascript is useful for transforming lists of data.When used in JSX, we can transform a list of data into a list of React Element.

When rendering a list in JSX, we make sure to give each item a unique **key** so that React can keep track of which items it needs to update.

```javascript
const skills = ['nunchucks', 'bow hunting', 'computer hacking'];

function Skills() {
  return (
    <ul>
      {skills.map((skill) => {
        return <li key={skill}>{skill}</li>;
      })}
    </ul>
  );
}
```

The solution of the Challenge:

```javascript
function List() {
  const friends = [
    { id: 893, name: 'Lynn' },
    { id: 871, name: 'Alex' },
    { id: 982, name: 'Ben' },
    { id: 61, name: 'Mikenzi' },
  ];

  return (
    <ul>
      {friends.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
}

export default function App() {
  return <List />;
}
```
