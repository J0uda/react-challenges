# Object Props

## Instructions

Although this challenge looks similar to the previous one, there are some subtle differences. As before, apply the new props to the Badge component so that it renders properly.

## Tasks

1. Give the image a proper **alt** tag using the author's name.
2. Make sure the badge displays the profile **image** correctly.
3. Display the author's **name** in the badge's heading.
4. Display the author's **handle** below the heading.
5. Apply the correct styles to the outer **div**

# Solution

JSX is 'just Javascript', so you can access properties of an object the same way you normally would. in JSX, expressions need the be wrapped in curly braces {}.

if a prop has a nested object, there are a few ways to access those properties. The most common is using Javascript's 'dot notation'.

```javascript
function Badge({ user }) {
  return <h1>Hello, {user.name}</h1>;
}
```

we need also destructure the object to make things a little bit easier to read.

```javascript
function Badge({ user }) {
  const { name } = user;

  return <h1>Hello, {name}</h1>;
}
```

The solution of the challenge:

```javascript
const USER_DATA = {
  name: 'Ben Adam',
  img: 'https://avatars.githubusercontent.com/u/6645985',
  handle: 'benadam11',
};

function Badge({ style, user }) {
  const { name, img, handle } = user;

  return (
    <div style={style}>
      <img src={img} alt={name} />
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
      user={USER_DATA}
      style={{
        width: 300,
        margin: '0 auto',
        border: '1px solid var(--beige-10)',
        borderRadius: 8,
        backgroundColor: 'var(--charcoal)',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        textAlign: 'center',
      }}
    />
  );
}
```
