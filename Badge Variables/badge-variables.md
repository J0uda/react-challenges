# Badge Variables

## Instructions

We have a Badge component with variables for name, handle and img that are unassigned. Your job is to assign those variables in the JSX so that the component renders correctly.

## Tasks

1. Give the image a proper **alt** tag using the author's name
2. Make sure the badge displays the profile **image** correctly
3. Display the author's **name** in the badge's heading
4. Display the author's **handle** below the heading

# Solution

Whenever you want to use an expression in JSX(an expression being a something that produces a value like a variable or a function), you need to wrap the expression in single curly braces, {}.

```javascript
function Welcome() {
  const name = 'Tyler';

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>What is 2 + 2 ? {2 + 2}</p>
    </div>
  );
}
```

To mix static and dynamic content in JSX.In the example below, "Today is" is static while our function invocation is dynamic.

```javascript
function Date() {
  return <p>Today is {new Date().toLocaleDateString()}</p>;
}
```

The final Solution for this challenge:

```javascript
function Badge() {
  const name = 'Tyler McGinnis';
  const handle = 'tylermcginnis';
  const img = 'https://avatars0.githubusercontent.com/u/2933430';

  return (
    <div className='badge'>
      <img alt={name} src={img} />
      <div>
        <h4>{name}</h4>
        <p>@{handle}</p>
      </div>
    </div>
  );
}

export default function App() {
  return <Badge />;
}
```
