# Adjacent Elements

## Instructions

There's a problem with our Layout component which is preventing it from rendering correctly.

## Tasks

1. Fix the error so the component renders correctly

# Solution

In JSX, a function must always return a single elements.

```javascript
function Welcome() {
  return <h1>Hello</h1>;
}
```

if you want to return more thant one element, you need to wrap the content in a Fragment which allows JSX to have a single element, but won't get rendered into the DOM.

there are two ways to do this.Either use the React.Fragment element or alternatively you can use the shorthand syntax, <></>

```javascript
function Welcome() {
  return (
    <React.Fragment>
      <h1>Hello!</h1>
      <h2>World</h2>
    </React.Fragment>
  );
}
```

```javascript
function Welcome() {
  return (
    <>
      <h1>Hello!</h1>
      <h2>World</h2>
    </>
  );
}
```

The Solution for this challenge:

```javascript
function Layout() {
  return (
    <React.Fragment>
      <header>Header</header>
      <main>Main</main>
      <aside>Aside</aside>
      <footer>Footer</footer>
    </React.Fragment>
  );
}

export default function App() {
  return <Layout />;
}
```
