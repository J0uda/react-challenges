# Function Props

## Instruction

Often times, we want to split our UI into smaller, more focused components to make our code easier to read and test. In this challenge, take the props being passed to the Badge component and use them in order to render the proper UI.

## Tasks

1. Give the image a proper **alt** tag using the author's name
2. Make sure the badge displays the profile image correctly
3. Display the author's **name** in the badge's heading
4. Display the author's **handle** below the heading
5. Pass the click handler to the button so that it opens an alert when clicked

# Solution

Sometimes we need to pass props down multiple levels in order to use them. That's a totally normal thing to do in React.

```javascript
function Parent({ name, childName }) {
  return (
    <div>
      <p>{name}</p>
      <Child name={childName} />
    </div>
  );
}
```

Remember that when we pass a function as props, we want to pass a reference to the function, not an invocation of the function.

```javascript
function Badge({ name, handleClick }) {
  return <div onClick={handleClick}>{name}</div>;
}
```

as opposed to this:

```javascript
function Badge({ name, handleClick }) {
  return <div onClick={handleClick()}>{name}</div>;
}
```

The Solution of the challenge:

```javascript
function Avatar({ img, name }) {
  return <img src={img} alt={name} />;
}

function Name({ name }) {
  return <h4>{name}</h4>;
}

function Handle({ handle }) {
  return <p>@{handle}</p>;
}

function Badge({ addFriend, style, user }) {
  const { name, img, handle } = user;

  return (
    <div style={{ style }}>
      <Avatar umg={img} alt={name} />
      <div>
        <Name name={name} />
        <Handle handle={handle} />
        <button onClick={addFriend}>Add Friend</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={{
        name: 'Lynn Fisher',
        img: 'https://avatars.githubusercontent.com/u/871315',
        handle: 'lynnandtonic',
      }}
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
      addFriend={() => alert('Added!')}
    />
  );
}
```
