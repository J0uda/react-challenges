# Character Limit Props

## Instruction

You'll notice that this challenge looks similar to the last one. However, instead of hard coding the character limit as we did before, we now want to make our component a little more flexible and pass it in via a prop. Fix up the code so it works as before, but with the new characterLimit prop.

## Tasks

1. Don't show an alert if the input length is within character limit.
2. Show an alert if the input length exceeds the character limit.

# Solution

The Solution of the challenge:

```javascript
function Input({ characterLimit }) {
  const handleChange = (event) => {
    if (event.target.value.length > characterLimit) {
      alert('Character limit exceeded');
    }
  };

  return <input onChange={handleChange} placeholder='Enter some text' />;
}

export default function App() {
  return (
    <section>
      <h1>Character Limit</h1>
      <Input characterLimit={20} />
    </section>
  );
}
```
