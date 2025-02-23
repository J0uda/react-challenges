export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleDecrement}>+</button>
      </div>
    </main>
  );
}
