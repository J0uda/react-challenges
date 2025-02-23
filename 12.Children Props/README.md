# Children Props

## Instruction

Finish the Badge component so that it utilizes all the props passed to it.

## Tasks

1. Give the image a proper alt tag using the author's name.
2. Make sure the badge displays the profile image correctly.
3. Display the author's name in the badge's heading.
4. Display the author's handle below the heading
5. Display the bio text under the headings
6. Pass the click handler to the button so that it opens an alert when clicked

# Solution

A Children is a prop in React.

```javascript
function Layout({ children }) {
  return (
    <div className='container'>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
```

The Solution of the Challenge:

```javascript
function Badge({ name, img, handle, children }) {
  return (
    <div className='badge'>
      <img alt={`Avatar for ${name}`} src={img} />
      <header>
        <h4>{name}</h4>
        <h6>@{handle}</h6>
      </header>
      {children}
    </div>
  );
}

export default function App() {
  const handleAddFriend = () => alert('Added');

  return (
    <Badge
      name='Alex Brown'
      handle='alexbrown40'
      img='https://avatars.githubusercontent.com/u/67877015'
    >
      <p>
        Alex enjoys running, surfing, and binge watching the Twilight series.
      </p>
      <button onClick={handleAddFriend}>Add Friend</button>
    </Badge>
  );
}
```
