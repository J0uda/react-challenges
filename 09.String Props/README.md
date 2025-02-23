# String Props

## Instructions

Currently, our Badge component is displaying hardcoded values. Instead of rendering the static values, we want to pass them in as props. In this challenge, your goal is to apply the props being passed to the Badge component (name, handle, and img) so that it renders correctly.

## Tasks

1. Give the image a proper alt tag using the author's name.
2. Make sure the badge displays the profile image correctly.
3. Display the author's name in the badge's heading.
4. Display the author's handle below the heading.

# Solution

We can access the props being passed to a component by using the **props** arguments in the component's function.

```javascript
function Badge(props) {}
```

Since **props** is always an object, we can destructure it if you'd like.

```javascript
function Badge({ name, handle, img }) {}
```

Whenever we want to use an expression in JSX (an expression being something that produces a value a variable or a function invocation), we need to wrap the expression in single curly braces {}

```javascript
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

The solution of the challenge:

```javascript
function Badge({ name, handle, img }) {
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
  return (
    <Badge
      name='Tyler McGinnis'
      handle='tylermcginnis'
      img='https://avatars0.githubusercontent.com/u/2933430'
    />
  );
}
```
