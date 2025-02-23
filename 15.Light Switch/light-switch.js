export default function App() {
  const [mode, setMode] = useState('dark');

  return (
    <main className={mode}>
      {mode === 'light' ? (
        <button onClick={() => setMode('dark')}>Activate Dark Mode</button>
      ) : (
        <button onClick={() => setMode('light')}>Activate Light Mode</button>
      )}
    </main>
  );
}
