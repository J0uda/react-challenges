function List() {
  const friends = [
    { id: 123, name: 'Lynn' },
    { id: 111, name: 'Alex' },
    { id: 45, name: 'Ben' },
    { id: 78, name: 'Mikenzi' },
  ];

  return (
    <ul>
      {friends.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return <List />;
}
