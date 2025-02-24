function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue, setInputValue] = useState('');
  const remainingCharacters = characterLimit - inputValue.length;
  const limitExceeded = remainingCharacters < 0;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (limitExceeded) {
      alert('The input exceeds the character limit. Please shorten your text.');
    } else {
      setInputValue('');
      alert('Thanks for your submission');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='limited-text-input'>Limited Text Input</label>
        <span className={limitExceeded ? 'error' : 'no-error'}>
          Character remaining: {remainingCharacters}
        </span>
      </div>
      <input
        type='text'
        placeholder='Enter some Text'
        id='limited-text-input'
        value={inputValue}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
