import * as React from 'react';

export default function App() {
  const [mode, setMode] = React.useState('dark');

  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <main className={mode}>
      <button onClick={handleClick}>
        {mode === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'}
      </button>
    </main>
  );
}
